import "./styles/global.css";
import Contador from "./components/Contador/Contador";
import { TemaProvider } from "./components/Contexto/TemaProvider";
import { Pagina } from "./components/pagina/Pagina";
import MenuFormularios from "./components/MenuFormulario/Menu";

function App() {
  return (
    <>
      <TemaProvider>
        <div className="app-container">
        <Contador />
        <Pagina />
        <MenuFormularios />
        </div>
      </TemaProvider>
    </>
  );
}

export default App;
