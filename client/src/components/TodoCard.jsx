export default function TodoCard({ children }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }} // Asegura centrado vertical total
    >
      <div
        className="card shadow-sm border-0"
        style={{ maxWidth: "640px", width: "100%" }} // Centrado y responsivo
      >
        <div className="card-header bg-white py-3">
          <h1 className="h3 m-0 text-center">To-Do</h1>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

