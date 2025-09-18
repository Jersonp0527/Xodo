import TodoElement from "./TodoElement"

export default function TodoPendientes() {
    return(
        <div className="card-body text-center">
            <h2>Pendientes ⚠️</h2>
            <TodoElement todo={{ taskName: "Besar a Gerson", due: "2024-12-31", priority: "Alta" }} />
            <TodoElement todo={{ taskName: "Hacer la tarea", due: "2024-11-30", priority: "Baja" }} />
            <TodoElement todo={{ taskName: "Casarme con Laura", due: "2024-10-15", priority: "Media" }} />
        </div>
    )
}