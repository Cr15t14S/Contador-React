import { useState, useEffect } from "react";
import "./contadorStyles.css";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleClick = () => {
    setContador(contador + 1);
  };
  const handleDisminuir = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div className="cardContador">
      <button className="button" onClick={handleClick}>
        Aumentar
      </button>
      <div className="value">
        {contador}
      </div>
      <button 
        className="button" onClick={() => { handleDisminuir(); }}>
        Disminuir
      </button>
    </div>
  );
};

export default Contador;
