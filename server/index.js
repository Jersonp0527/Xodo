
// Importación de módulos necesarios
import express from 'express'; // Framework web para Node.js
import cors from 'cors'; // Middleware para habilitar CORS
import morgan from 'morgan'; // Middleware para logs de peticiones


// 1) Middlewares: cosas que se ejecutan ANTES de tus rutas
app.use(cors());              // Permite peticiones desde otros orígenes (ej. frontend en otro puerto)
app.use(morgan('dev'));       // Log de las peticiones en consola (GET /api/todos 200 ...)
app.use(express.json());      // Parsea JSON en el body: req.body ya será un objeto


// 2) Almacenamiento EN MEMORIA (se pierde al reiniciar)
let todos = []; // Cada todo será { id, text, done, createdAt }

// Salud
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'xodo-api', timestamp: Date.now() });
});


// Obtener todos los todos
app.get('/api/todos', (req, res) => {
	res.json(todos);
});



// Crear un nuevo todo
app.post('/api/todos', (req, res) => {
	const { text } = req.body;
	// Validar que el texto no esté vacío
	if (!text || !text.trim()) return res.status(400).json({ error: 'text requerido' });
	// Crear el objeto todo
	const todo = { id: crypto.randomUUID(), text: text.trim(), done: false, createdAt: Date.now() };
	// Agregar al inicio del array
	todos.unshift(todo);
	res.status(201).json(todo);
});



// Actualizar un todo existente por id
app.put('/api/todos/:id', (req, res) => {
	const { id } = req.params;
	const { text, done } = req.body;
	// Buscar el índice del todo
	const i = todos.findIndex(t => t.id === id);
	if (i === -1) return res.status(404).json({ error: 'no encontrado' });
	// Actualizar campos si se proporcionan
	if (typeof text === 'string') todos[i].text = text.trim();
	if (typeof done === 'boolean') todos[i].done = done;
	res.json(todos[i]);
});



// Eliminar un todo por id
app.delete('/api/todos/:id', (req, res) => {
	const { id } = req.params;
	const before = todos.length;
	// Filtrar el todo a eliminar
	todos = todos.filter(t => t.id !== id);
	if (todos.length === before) return res.status(404).json({ error: 'no encontrado' });
	res.status(204).end();
});



// Iniciar el servidor en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API lista en http://localhost:${PORT}`));