import { useState, useEffect } from "react";
import { TemaContext } from "./TemaContext";

export const TemaProvider = ({ children }) => {
  const [oscuro, setOscuro] = useState(false);

  const toggleTema = () => {
    setOscuro(!oscuro);
  };
  
  useEffect(() => {
    if (oscuro) {
      document.body.classList.add("tema-oscuro");
      document.body.classList.remove("tema-claro");
    } else {
      document.body.classList.add("tema-claro");
      document.body.classList.remove("tema-oscuro");
    }
  }, [oscuro]);

  return (
    <TemaContext.Provider value={{ oscuro, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
};
