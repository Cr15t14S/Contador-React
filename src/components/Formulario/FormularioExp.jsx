import { useState } from "react";
import "./FormularioStyles.css";

export function FormularioExp() {
  const [formData, setFormData] = useState({ nombre: "", email: "" });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email) {
      setErrors("Por favor, complete todos los campos.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors("Por favor, ingrese un correo electrónico válido.");
      return;
    }
    setErrors("");
    alert(`Datos enviados: ${JSON.stringify(formData)}`);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      {errors && <p className="error">{errors}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}
