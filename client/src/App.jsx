import "./App.css"
import Title from "./components/labelTitle";
import TodoForm from "./components/TodoForm";

export default function App() {
  return (
    <div
      class = "App"
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" , backgroundColor: "black" }}
    >
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <div>
            <Title className="card-title" />
          </div>
          <div className="card d-flex">
            <TodoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
