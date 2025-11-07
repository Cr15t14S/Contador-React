import { useState } from "react";
import { FormularioExp } from "../Formulario/FormularioExp";
import { FormularioVarios } from "../Formulario/FormularioVario";
import { FormularioMultiple } from "../Formulario/FormularioMultiple";
import menu from "../../assets/menu.svg";
import "./MenuStyle.css";
const MenuFormularios = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [formularioActivo, setFormularioActivo] = useState(null);
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
  const seleccionarFormulario = (tipo) => {
    setFormularioActivo(tipo);
    setMenuAbierto(false);
  };
  return (
    <div className="menu-container">
      {" "}
      <img
        src={menu}
        alt="Abrir menú"
        className="menu-boton"
        onClick={toggleMenu}
      />{" "}
      {menuAbierto && (
        <div className="menu-opciones">
          {" "}
          <button onClick={() => seleccionarFormulario("exp")}>
            Formulario Exp
          </button>{" "}
          <button onClick={() => seleccionarFormulario("multiple")}>
            Formulario Multiple
          </button>{" "}
          <button onClick={() => seleccionarFormulario("vario")}>
            Formulario Vario
          </button>{" "}
        </div>
      )}{" "}
      <div className="formulario-activo">
        {" "}
        {formularioActivo === "exp" && <FormularioExp />}{" "}
        {formularioActivo === "multiple" && <FormularioMultiple />}{" "}
        {formularioActivo === "vario" && <FormularioVarios />}{" "}
      </div>{" "}
    </div>
  );
};
export default MenuFormularios;
