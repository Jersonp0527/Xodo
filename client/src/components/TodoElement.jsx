// TodoElement.jsx
export default function TodoElement({ todo, onDone, onEdit, onDelete  }) {
  const bg = getPriorityBg(String(todo.priority));

  return (
    <div
      className="card mb-2 shadow-sm todo-card"
      style={{
        backgroundColor: bg,        // fondo pastel según prioridad
        // borderLeft: `6px solid ${getPriorityAccent(String(todo.priority))}`, // <- opcional: franja lateral
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center gap-3">
        {/* IZQUIERDA: texto (alineado) */}
        <div className="text-start">
          <h5 className="card-title mb-1">
            {todo.taskName || todo.name}
          </h5>
          {todo.due && (
            // color de la fecha en rojo suave
            <h6 class="Fecha" className="card-subtitle text-muted" style={{ color: "#FF6666" }}>
              {todo.due}
            </h6>
          )}
        </div>


        {/* DERECHA: botones */}
        <div className="btn-group ms-2" role="group" aria-label="Acciones">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onDone?.(todo)}
            title="Marcar como hecha"
          >
            🆗
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => onEdit?.(todo)}
            title="Editar"
          >
            ✏️
          </button>          
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete?.(todo)}
            title="Eliminar"
          >
            🚯
          </button>
        </div>
      </div>
    </div>
  );
}

// Colores pastel por prioridad (sin círculo)
function getPriorityBg(priority) {
  switch (priority) {
    case "Alta": // Alta
      return "#FFE6E6"; // rojo pastel
    case "Media": // Media
      return "#FFF7E6"; // naranja pastel
    case "Baja": // Baja
    default:
      return "#E6F7FF"; // azul pastel
  }
}
