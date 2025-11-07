import { useContext, useEffect } from "react";
import { TemaContext } from "../Contexto/TemaContext";
import sol from "../../assets/sol.svg";
import luna from "../../assets/luna.svg";
import "./paginaStyles.css";

export const Pagina = () => {

    const { oscuro, toggleTema } = useContext(TemaContext);

    useEffect(() => {
        document.title = oscuro ? "Tema Oscuro" : "Tema Claro";
    }, [oscuro]);

    return (
    <div className={oscuro ? "pagina oscuro" : "pagina claro"}>
      <div className="contenido"></div>
      <img
        src={oscuro ? luna : sol}
        alt="Botón de tema"
        className="imagen-tema"
        onClick={toggleTema}
      />
    </div>
  );
}