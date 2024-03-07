import React from "react";

import Login from "./components/auth/Login";
import Registro from "./components/auth/Registrar";
import Proyecto from "./components/proyectos/Proyectos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProyectoState from './context/proyectos/proyectoState'
import TareaState from "./context/tareas/TareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/proyectos" element={<Proyecto />} />
      </Routes>
    </BrowserRouter>
    </TareaState>
    </ProyectoState>
  );
}

export default App;