import axios from "axios";

const api = axios.create({
  baseURL: `${(process.env.REACT_APP_BACKEND_URL || "").replace(/\/$/, "")}/api`,
  timeout: 45000,
});

export async function saveContact(contact) {
  const { data } = await api.post("/contacts", contact);
  // A página HTML da prévia não é uma confirmação de gravação.
  if (!data || typeof data.id !== "string" || !data.created_at) {
    throw new Error("O servidor não confirmou o recebimento.");
  }
  return data;
}

export async function listContacts(key) {
  const { data } = await api.get("/contacts", { headers: { "X-Admin-Key": key } });
  if (!Array.isArray(data)) throw new Error("Resposta inválida do servidor.");
  return data;
}
