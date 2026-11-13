"""Persistent local storage, with the existing MongoDB option for hosting."""
import asyncio
import json
import sqlite3
from contextlib import closing
from pathlib import Path


class StorageError(Exception):
    pass


class ContactStore:
    def __init__(self, environ, root):
        self.kind = environ.get("CONTACT_STORAGE", "mongodb").strip().lower()
        self.client = None
        if self.kind == "sqlite":
            self.path = Path(environ.get("SQLITE_PATH", str(root / "data" / "contacts.sqlite3")))
            if not self.path.is_absolute():
                self.path = root / self.path
            self.path.parent.mkdir(parents=True, exist_ok=True)
            with closing(sqlite3.connect(self.path)) as conn, conn:
                conn.execute("CREATE TABLE IF NOT EXISTS contacts (id TEXT PRIMARY KEY, created_at TEXT NOT NULL, payload TEXT NOT NULL)")
        elif self.kind == "mongodb":
            from motor.motor_asyncio import AsyncIOMotorClient
            url = environ.get("MONGO_URL", "").strip()
            name = environ.get("DB_NAME", "").strip()
            if not url or not name:
                raise RuntimeError("Configure MONGO_URL e DB_NAME. Para a prévia local, use CONTACT_STORAGE=sqlite.")
            self.client = AsyncIOMotorClient(url, serverSelectionTimeoutMS=8000)
            self.db = self.client[name]
        else:
            raise RuntimeError("CONTACT_STORAGE deve ser sqlite ou mongodb.")

    def _sqlite(self, operation, contact=None):
        with closing(sqlite3.connect(self.path, timeout=10)) as conn, conn:
            if operation == "insert":
                conn.execute("INSERT INTO contacts (id, created_at, payload) VALUES (?, ?, ?)",
                             (contact["id"], contact["created_at"], json.dumps(contact, ensure_ascii=False)))
            elif operation == "list":
                return [json.loads(row[0]) for row in conn.execute("SELECT payload FROM contacts ORDER BY created_at DESC LIMIT 1000")]
            else:
                conn.execute("SELECT 1").fetchone()

    async def insert(self, contact):
        try:
            if self.kind == "sqlite":
                await asyncio.to_thread(self._sqlite, "insert", contact)
            else:
                await self.db.contacts.insert_one(dict(contact))
        except Exception as exc:
            raise StorageError("Falha ao salvar contato") from exc

    async def list(self):
        try:
            if self.kind == "sqlite":
                return await asyncio.to_thread(self._sqlite, "list")
            return await self.db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
        except Exception as exc:
            raise StorageError("Falha ao consultar contatos") from exc

    async def ping(self):
        try:
            if self.kind == "sqlite":
                await asyncio.to_thread(self._sqlite, "ping")
            else:
                await self.db.command("ping")
        except Exception as exc:
            raise StorageError("Banco indisponível") from exc

    def close(self):
        if self.client is not None:
            self.client.close()
