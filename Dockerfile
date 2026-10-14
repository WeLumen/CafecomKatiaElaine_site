# ---------- 1) build do frontend ----------
FROM node:20-alpine AS frontend
WORKDIR /app/frontend
COPY frontend/package.json ./
# o projeto usa "resolutions" (só o yarn respeita), então instalamos com yarn
RUN yarn install --network-timeout 600000
COPY frontend/ ./
# API na mesma origem: deixa a URL vazia
ENV REACT_APP_BACKEND_URL=""
ENV CI=false
RUN yarn build

# ---------- 2) backend + frontend estático ----------
FROM python:3.11-slim
WORKDIR /app/backend
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ ./
COPY --from=frontend /app/frontend/build ./static
ENV PORT=10000
EXPOSE 10000
CMD ["sh", "-c", "uvicorn server:app --host 0.0.0.0 --port ${PORT}"]
