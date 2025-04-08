import React from "react";
import Home from "../src/pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eventos from "./pages/Eventos/Eventos"
import EditarEvento from "./components/Editar/Editar"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/EditarEvento" element={<EditarEvento />} />
        <Route path="/FormularioCadastro" element={<FormularioCadastro />} />
      </Routes>
    </BrowserRouter>
    </>    
  )
}

export default App