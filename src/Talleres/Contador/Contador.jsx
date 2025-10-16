import { useState } from "react";
import styles from "./styles.module.css";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleClick = () => {
    setContador(contador + 1);
  };
  const handleDisminuir = () => {
    setContador(contador - 1);
  };
  return (
    <div className={styles.cardContador}>
      <button className={styles.button} onClick={handleClick}>
        Aumentar
      </button>
      <div className={styles.value}>{contador}</div>
      <button className={styles.button} onClick={handleDisminuir}>
        Disminuir
      </button>
    </div>
  );
};

export default Contador;
