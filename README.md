# Xodo ✅

Pequeño proyecto full‑stack para aprender ReactJS (con Vite), Bootstrap 5 (usando CDN nativo), manejo de estado y Context, y un backend ExpressJS con un CRUD simple de tareas. Se desarrolla en una sola página (sin rutas) para centrarnos en componentes, estado y flujo de datos.

## 🚀 Descripción general

Construirás una to‑do app donde puedes crear, listar, completar, editar y eliminar tareas. El frontend en React usa Context API para compartir estado global (lista de tareas y acciones). El backend en Express expone endpoints REST bajo /api/todos.

Frontend: React + Vite, CSS vía Bootstrap 5 por CDN (solo clases utilitarias, sin react‑bootstrap).

Backend: ExpressJS (estructura estilo MVC sencilla: routes/, controllers/, models/), almacenamiento inicial en memoria (opcional: archivo JSON o SQLite más adelante).

Sin rutas en el frontend: todo en una página con componentes bien organizados.

## 🧩 Tecnologías

- Frontend: React (Vite recomendado) + Context API + Hooks (useState, useReducer, useEffect).
- UI: Bootstrap 5 mediante CDN (sin React‑Bootstrap).
- Backend: ExpressJS con rutas REST /api/todos (GET/POST/PUT/DELETE). Persistencia inicial en memoria.
- Comunicación: Fetch/axios hacia http://localhost:3000/api/todos (o puerto que definas).

**Nota sobre el HTML para el CDN de Bootstrap:**
- Vite: agrega los enlaces del CDN en el index.html de la raíz del proyecto (Vite no usa public/index.html).
- CRA (Create React App): sería en public/index.html.


## 🛠️ Clonar y preparar el entorno

Puedes clonar y preparar el entorno automáticamente en Windows usando el script `setup.bat`:

```sh
REM https://github.com/Jersonp0527/Xodo
setup.bat https://github.com/Jersonp0527/Xodo
```

Esto hará:
- Clonar el repositorio en una carpeta llamada `Xodo`
- Instalar dependencias en `server` y `client`
- Mostrar instrucciones para iniciar ambos servidores

### Manualmente (alternativa)
1. Clona el repo y entra a la carpeta:
	```sh
	git clone https://github.com/Jersonp0527/Xodo
	cd Xodo
	```
2. Instala dependencias backend:
	```sh
	cd server && npm install && cd ..
	```
3. Instala dependencias frontend:
	```sh
	cd client && npm install && cd ..
	```
4. Inicia backend:
	```sh
	cd server && npm start
	```
5. Inicia frontend:
	```sh
	cd client && npm run dev
	```

---

✅ Lista de progreso y pendientes (To‑Do list)

1. Preparación del entorno2
2. Backend Express (MVP en memoria)
3. Frontend React — Estructura básica
4. Context API (estado global)
5. Conexión con la API
6. UX y validaciones
7. Persistencia mejorada (opcional)
8. Calidad y mantenimiento
9. Extras (stretch goals)1