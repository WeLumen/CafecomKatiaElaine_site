"""Run: .venv/Scripts/python -m unittest discover -s backend -p test_contacts.py"""
import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import AsyncMock, patch

import httpx

test_directory = tempfile.TemporaryDirectory()
os.environ["CONTACT_STORAGE"] = "sqlite"
os.environ["SQLITE_PATH"] = str(Path(test_directory.name) / "bootstrap.sqlite3")
os.environ["ADMIN_KEY"] = "local-test-key-with-32-characters"

import server
from contact_store import ContactStore, StorageError


class ContactTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.config = {"CONTACT_STORAGE": "sqlite", "SQLITE_PATH": str(Path(self.directory.name) / "contacts.sqlite3")}
        self.previous_store = server.store
        server.store = ContactStore(self.config, Path(self.directory.name))
        self.mail = patch.object(server, "send_email", new=AsyncMock(return_value=None))
        self.mail.start()
        self.client = httpx.AsyncClient(transport=httpx.ASGITransport(app=server.app), base_url="http://test")
        self.contact = {"nome": "Cadastro de teste", "telefone": "11999990000", "perfil": "Paciente / Atleta", "assunto": "Contato", "mensagem": "Teste de persistência"}
        self.headers = {"X-Admin-Key": os.environ["ADMIN_KEY"]}

    async def asyncTearDown(self):
        await self.client.aclose()
        self.mail.stop()
        server.store.close()
        server.store = self.previous_store
        self.directory.cleanup()

    async def test_contact_and_preregistration_survive_reopening_database(self):
        first = await self.client.post("/api/contacts", json=self.contact)
        self.assertEqual(first.status_code, 200)
        preregistration = dict(self.contact, assunto="Pré-inscrição — Aperfeiçoamento Prático de Podologia Clínica", mensagem="E-mail: teste@example.invalid\nModalidade de interesse: À vista")
        second = await self.client.post("/api/contacts", json=preregistration)
        self.assertEqual(second.status_code, 200)
        server.store.close()
        server.store = ContactStore(self.config, Path(self.directory.name))
        response = await self.client.get("/api/contacts", headers=self.headers)
        self.assertEqual(response.status_code, 200)
        self.assertEqual({c["id"] for c in response.json()}, {first.json()["id"], second.json()["id"]})
        self.assertEqual(response.json()[0]["mensagem"], preregistration["mensagem"])

    async def test_admin_requires_correct_key(self):
        self.assertEqual((await self.client.get("/api/contacts")).status_code, 401)
        self.assertEqual((await self.client.get("/api/contacts", headers={"X-Admin-Key": "incorrect"})).status_code, 401)

    async def test_podologia_lucro_interest_reaches_admin(self):
        contact = dict(self.contact, perfil="Podologia", assunto="Interesse — Podologia com Lucro", mensagem="E-mail: teste@example.invalid\nInteresse: mentoria e Grupo VIP Fundador\nOrigem: página Podologia com Lucro\nAutorizou contato sobre a mentoria.")
        response = await self.client.post("/api/contacts", json=contact)
        self.assertEqual(response.status_code, 200)
        messages = (await self.client.get("/api/contacts", headers=self.headers)).json()
        self.assertEqual(messages[0]["assunto"], contact["assunto"])
        self.assertEqual(messages[0]["mensagem"], contact["mensagem"])

    async def test_failed_save_does_not_report_success(self):
        with patch.object(server.store, "insert", new=AsyncMock(side_effect=StorageError("test failure"))):
            self.assertEqual((await self.client.post("/api/contacts", json=self.contact)).status_code, 503)
        self.assertEqual((await self.client.get("/api/contacts", headers=self.headers)).json(), [])

    async def test_wbpf_request_reaches_admin(self):
        contact = dict(self.contact, perfil="Atleta", assunto="WBPF — Atendimento podológico", mensagem="E-mail: teste@example.invalid\nEvento ou competição: Campeonato de teste\nMensagem: Quero informações\nOrigem: formulário WBPF no site\nAutorizou contato sobre esta solicitação.")
        response = await self.client.post("/api/contacts", json=contact)
        self.assertEqual(response.status_code, 200)
        messages = (await self.client.get("/api/contacts", headers=self.headers)).json()
        self.assertEqual(messages[0]["assunto"], contact["assunto"])
        self.assertEqual(messages[0]["mensagem"], contact["mensagem"])

    async def test_invalid_form_and_health(self):
        self.assertEqual((await self.client.post("/api/contacts", json=dict(self.contact, telefone="1"))).status_code, 422)
        response = await self.client.get("/api/health")
        self.assertEqual(response.json(), {"status": "ok", "database": "connected", "storage": "sqlite"})


if __name__ == "__main__":
    unittest.main()
