import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./Componentes/Formulario";
import { useState } from "react";
import Header from "./Componentes/Header";
import Boton from "./Componentes/Boton";

function App() {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  return (
    <div className="App">
      <Header />
      <Formulario
        nombre={nombre}
        setNombre={setNombre}
        contraseña={contraseña}
        setContraseña={setContraseña}
      />
      <Boton contraseña={contraseña} />
    </div>
  );
}

export default App;
