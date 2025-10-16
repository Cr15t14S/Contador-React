import { useState, useEffect, use } from "react";
import styles from "./styles.module.css";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleClick = () => {
    setContador(contador + 1);
    setNombre("xd");
  };
  const handleDisminuir = () => {
    setContador(contador - 1);
  };

  const [color, setColor] = useState("red");
  const [nombre, setNombre] = useState("");
  
  const handleColorChange = () => {
    setColor("Azul");
  };

  useEffect(() => {
    document.title = `Contador: ${contador} y color: ${color}`;
  }, [contador, color]);

  return (
    <div className={styles.cardContador}>
      <button className={styles.button} onClick={handleClick}>
        Aumentar
      </button>
      <div className={styles.value}>{contador}</div>
      <button
        className={styles.button}
        onClick={() => {
          handleDisminuir();
          handleColorChange();
      }}
      >
        Disminuir
      </button>
    </div>
  );
};

export default Contador;
