import { useState } from "react";
import "./FormularioStyles.css";

export function FormularioMultiple(){
    const [nombre, setNombre] = useState("");

    const handleChange = (e) => {
        setNombre(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre enviado: ${nombre}`);
    }

    return(<>   
        <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="userNombre">Nombre:</label>
            <input type="text" className="userNombre" placeholder="nombre" value={nombre} onChange={handleChange} />
            <button type="submit" value="enviar">Enviar</button>
        </form>
    </>)
}