from fastapi import FastAPI, APIRouter, HTTPException, Header, status
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from contact_store import ContactStore, StorageError
import os
import re
import ipaddress
import logging
import httpx
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime, timezone
from secrets import compare_digest

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB continua sendo o padrão para publicação; SQLite exige configuração explícita.
store = ContactStore(os.environ, ROOT_DIR)

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
EMAIL_FROM = os.environ.get("EMAIL_FROM", "Café com Katia Elaine <onboarding@resend.dev>")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Café com Katia Elaine")
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO", "")
OWNER_EMAIL = os.environ.get("OWNER_EMAIL", "")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str) -> str | None:
    _assert_safe_email(subject, html)
    if not RESEND_API_KEY or not to:
        logger.warning("E-mail não enviado: RESEND_API_KEY ou OWNER_EMAIL não configurados")
        return None
    payload = {"from": EMAIL_FROM, "to": [to], "subject": subject, "html": html}
    if EMAIL_REPLY_TO:
        payload["reply_to"] = EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as http:
            resp = await http.post(
                "https://api.resend.com/emails",
                headers={"Authorization": f"Bearer {RESEND_API_KEY}"},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        logger.error(f"Resend falhou: {e.response.status_code} {e.response.text}")
        raise
    except Exception as e:
        logger.error(f"Erro ao enviar e-mail: {e}")
        raise


class ContactCreate(BaseModel):
    nome: str = Field(min_length=2, max_length=120)
    telefone: str = Field(min_length=8, max_length=30)
    perfil: str = Field(min_length=2, max_length=80)
    assunto: str = Field(min_length=2, max_length=120)
    mensagem: str = Field(default="", max_length=2000)


class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


def _contact_email_html(c: Contact) -> str:
    def row(label, value):
        return (f'<tr><td style="padding:10px 18px;color:#6E6467;font-size:12px;'
                f'text-transform:uppercase;letter-spacing:1.5px;vertical-align:top">{label}</td>'
                f'<td style="padding:10px 18px;color:#322A2E;font-size:15px">{escape(value)}</td></tr>')

    rows = row("Nome", c.nome) + row("Telefone / WhatsApp", c.telefone) + row("Perfil", c.perfil) + row("Assunto", c.assunto)
    if c.mensagem:
        rows += row("Mensagem", c.mensagem)
    return (
        '<table role="presentation" width="100%" style="background:#F8F5EF;padding:32px 0">'
        '<tr><td align="center">'
        '<table role="presentation" width="560" style="background:#FFFDF9;border:1px solid #E6DDD3;'
        'border-radius:16px;font-family:Arial,sans-serif;overflow:hidden">'
        '<tr><td style="background:#351B31;padding:24px 32px">'
        '<span style="color:#B88D56;font-size:12px;letter-spacing:3px;text-transform:uppercase">Novo contato pelo site</span><br/>'
        '<span style="color:#FFFDF9;font-size:22px">Café com Katia Elaine</span>'
        '</td></tr>'
        f'<tr><td style="padding:16px 14px"><table role="presentation" width="100%">{rows}</table></td></tr>'
        '<tr><td style="padding:18px 32px;border-top:1px solid #E6DDD3;color:#6E6467;font-size:12px">'
        f'Enviado automaticamente pelo site de {escape(EMAIL_FROM_NAME)}. Responda diretamente pelo WhatsApp do contato.'
        '</td></tr>'
        '</table></td></tr></table>'
    )


@api_router.get("/")
async def root():
    return {"message": "Café com Katia Elaine API"}


@api_router.post("/contacts", response_model=Contact)
async def create_contact(input: ContactCreate):
    contact = Contact(**input.model_dump())
    try:
        await store.insert(contact.model_dump())
    except StorageError:
        logger.exception("Falha ao gravar formulário no banco")
        raise HTTPException(status_code=503, detail="Não foi possível registrar sua mensagem. Tente novamente.")
    try:
        email_id = await send_email(
            to=OWNER_EMAIL,
            subject=f"Novo contato pelo site · {contact.assunto}",
            html=_contact_email_html(contact),
        )
        if email_id:
            logger.info("E-mail de notificação enviado")
    except Exception as e:
        logger.warning(f"Falha ao enviar email de notificação (contato salvo): {e}")
    return contact


@api_router.get("/health")
async def health():
    # Conexão real: serve como health check no Render. Não revela credenciais.
    try:
        await store.ping()
    except StorageError:
        raise HTTPException(status_code=503, detail="Banco de dados indisponível")
    return {"status": "ok", "database": "connected", "storage": store.kind}


@api_router.get("/contacts", response_model=List[Contact])
async def list_contacts(x_admin_key: str = Header(default="")):
    configured_key = os.environ.get("ADMIN_KEY", "")
    if not configured_key or len(configured_key) < 16:
        logger.error("ADMIN_KEY não configurada ou muito curta")
        raise HTTPException(status_code=503, detail="Painel administrativo não configurado")
    if not x_admin_key or not compare_digest(x_admin_key, configured_key):
        raise HTTPException(status_code=401, detail="Chave de acesso inválida")
    try:
        return await store.list()
    except StorageError:
        logger.exception("Falha ao consultar mensagens")
        raise HTTPException(status_code=503, detail="Banco de dados indisponível")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Frontend estático (build do React copiado para backend/static pelo Dockerfile) ---
STATIC_DIR = ROOT_DIR / "static"
if STATIC_DIR.exists():
    if (STATIC_DIR / "static").exists():
        app.mount("/static", StaticFiles(directory=STATIC_DIR / "static"), name="assets")

    @app.get("/{full_path:path}", include_in_schema=False)
    async def spa(full_path: str):
        if full_path.startswith("api"):
            raise HTTPException(status_code=404, detail="Not found")
        candidate = (STATIC_DIR / full_path).resolve()
        if full_path and candidate.is_file() and STATIC_DIR.resolve() in candidate.parents:
            return FileResponse(candidate)
        return FileResponse(STATIC_DIR / "index.html")


@app.on_event("shutdown")
async def shutdown_db_client():
    store.close()
