import  { useState } from 'react'; 
import "./FormularioStyles.css";

export function FormularioVarios(){
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Datos enviados: ${JSON.stringify(formData)}`);
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="userNombre">Nombre:</label>
            <input type="text" className="userNombre" placeholder="nombre" value={formData.nombre} onChange={handleChange} />
            <label htmlFor="userEmail">Email:</label>
            <input type="email" className="userEmail" placeholder="email" value={formData.email} onChange={handleChange} />
            <label htmlFor="userMensaje">Mensaje:</label>
            <textarea className="userMensaje" placeholder="mensaje" value={formData.mensaje} onChange={handleChange} />
            <button type="submit" value="enviar">Enviar</button>
        </form>
    );
}