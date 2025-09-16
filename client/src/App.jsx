import TodoCard from "./components/TodoCard";

export default function App()  {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
    <TodoCard>
      <p className="text-muted mb-2">① Aquí irá el formulario.</p>
      <p className="text-muted mb-0">② Aquí irá la lista de tareas.</p>
    </TodoCard>
    
    </div>
  );
}

