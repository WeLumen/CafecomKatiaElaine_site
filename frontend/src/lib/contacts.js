
import axios from "axios";

const BACKEND_URL = (
  process.env.REACT_APP_BACKEND_URL ||
  "https://cafecomkatiaelaine-site.onrender.com"
).replace(/\/$/, "");

const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  timeout: 60000,
});

export async function saveContact(contact) {
  const { data } = await api.post("/contacts", contact);

  if (!data || typeof data.id !== "string" || !data.created_at) {
    throw new Error("O servidor não confirmou o recebimento.");
  }

  return data;
}

export async function listContacts(key) {
  const { data } = await api.get("/contacts", {
    headers: { "X-Admin-Key": key },
  });

  if (!Array.isArray(data)) {
    throw new Error("Resposta inválida do servidor.");
  }

  return data;
}
