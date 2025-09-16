import Title from "./components/Title";
import TodoForm from "./components/TodoForm";

export default function App()  {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
      >
        <Title></Title>
        <TodoForm />
    </div>
  );
}

