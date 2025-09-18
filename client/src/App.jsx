import Title from "./components/labelTitle";
import TodoForm from "./components/TodoForm";
import TodoPendientes from "./components/TodoPendientes";
import TodoHechos from "./components/TodoHechos";


export default function App() {
  return (
    <div
      class = "App"
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)"}} 
    >
      <div className="container flex-column rounded p-4" style={{backgroundColor: "white"}}>
        
        {/* Título de la aplicación */}
        <div className="container">
          <div>
            <Title/>
          </div>
          <TodoForm />
          {/*Formulario de creación de tareas*/}
          <div className="container">
            
            {/*Lista de tareas*/}
            <TodoPendientes ListName={"Tareas Pendientes"}/>
            <TodoHechos ListName={"Tareas Hechas"}/>  
          </div>
        </div>

       

      </div>
    </div>
  );
}
