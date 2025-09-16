# Xodo ✅

Pequeño proyecto full‑stack para aprender ReactJS (con Vite), Bootstrap 5 (usando CDN nativo), manejo de estado y Context, y un backend ExpressJS con un CRUD simple de tareas. Se desarrolla en una sola página (sin rutas) para centrarnos en componentes, estado y flujo de datos.

## 🚀 Descripción general

Construirás una to‑do app donde puedes crear, listar, completar, editar y eliminar tareas. El frontend en React usa Context API para compartir estado global (lista de tareas y acciones). El backend en Express expone endpoints REST bajo /api/todos.

Frontend: React + Vite, CSS vía Bootstrap 5 por CDN (solo clases utilitarias, sin react‑bootstrap).

Backend: ExpressJS (estructura estilo MVC sencilla: routes/, controllers/, models/), almacenamiento inicial en memoria (opcional: archivo JSON o SQLite más adelante).

Sin rutas en el frontend: todo en una página con componentes bien organizados.

## 🧩 Tecnologías

- Node.js ≥ 18
- React 18 con Vite
- Bootstrap 5 (CDN en index.html del frontend)
- Express 4
- (Opcional) Zod/Yup para validación, Axios/Fetch para HTTP, Vitest/RTL para pruebas