// TodoForm.jsx
import { useState } from "react";

export default function dateInput() {
  const [due, setDue] = useState("");

  return (
    <form className="p-3">
      <div className="mb-3">
        <label htmlFor="due" className="form-label">Fecha límite</label>
        <input
          id="due"
          type="date"
          className="form-control"
          value={due}
          onChange={(e) => setDue(e.target.value)}
          min={new Date().toISOString().split("T")[0]} // hoy o posterior
        />
      </div>
      {/* ...otros campos y botón */}
    </form>
  );
}
