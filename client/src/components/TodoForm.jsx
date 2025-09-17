import "../styles/TodoForm.css";
// import { useState, useRef } from "react";

// Componente de formulario para crear tareas
export default function TodoForm() {
  // Estado local para almacenar la fecha límite seleccionada
//  const [taskName, setTaskNmae] = useState("");
//  const [due, setDue] = useState("");
//  const [priority, setPriority] = useState("");
//  const collapseRef = useRef(null);

//  async function saveTodo(todo){
//    try{
//        const res = await fetch("api"),{
//            method: "POST",
//            headers:{ "Content-Type": "application/json"},
//            body: JSON.stringfy(todo),
//        }
//    }



  return (
    // Contenedor centrado usando utilidades de Bootstrap
    <div className="d-flex justify-content-center align-items-center">
      {/* Tarjeta visual con padding y sombra ligera */}
      <div className="card border-0 m-1 p-3 shadow-sm todo-card">
        {/* Botón que despliega/colapsa el formulario usando el componente Collapse de Bootstrap */}
        <button
          type="button"
          className="btn  w-100 mb-2"             // w-100 = ancho completo; mb-2 = margen inferior
          data-bs-toggle="collapse"               // activa el comportamiento de colapso
          data-bs-target="#todoFormCollapse"      // id del elemento que se va a colapsar
          aria-expanded="false"                   // accesibilidad: estado inicial del colapso
          aria-controls="todoFormCollapse"        // accesibilidad: asocia el control con el panel
        >
          {/* h5 visual sin márgenes para mantener el botón compacto */}
          <h3 className="h5 m-0">Crear tarea</h3>
        </button>

        {/* Panel colapsable que contiene el formulario */}
        <div className="collapse" id="todoFormCollapse">
         
          {/* vstack = apila hijos en columna; gap-3 = separación uniforme entre elementos */}
          <form className="vstack gap-3">
            
            {/* Campo: nombre de la tarea */}
            <div>
              <label htmlFor="taskName" className="form-label">
                Nombre de la tarea
              </label>
              <input
                id="taskName"
                type="text"               // tipo de entrada de texto
                className="form-control"  // estilos consistentes de Bootstrap para inputs
                placeholder="Ej. Entregar informe"
              />
            </div>

            {/* Campo: fecha límite */}
            <div>
              <label htmlFor="due" className="form-label">Fecha límite</label>
              <input
                id="due"
                type="date"                           // selector de fecha nativo del navegador
                className="form-control"
                // value={due}                           // valor controlado por estado
                // onChange={(e) => setDue(e.target.value)} // actualiza el estado al cambiar
                min={new Date().toISOString().split("T")[0]} // restringe a hoy o posterior
              />
            </div>

            {/* Campo: prioridad */}
            <div>
              <label htmlFor="priority" className="form-label">Prioridad</label>
              <select
                id="priority"
                className="form-select"   // estilos consistentes de Bootstrap para selects
                defaultValue=""           // placeholder deshabilitado como valor por defecto
              >
                <option value="" disabled>Selecciona una prioridad</option>
                <option value="1">Baja</option>
                <option value="2">Media</option>
                <option value="3">Alta</option>
              </select>
            </div>

            {/* Botón para enviar el formulario */}
            <div>
              <button type="submit" className="btn btn-primary w-100">
                Guardar tarea
              </button>
            </div>



          </form>
        </div>
      </div>
    </div>
  );
}
