import React from "react";
import Home from "../src/pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eventos from "./pages/Eventos/Eventos"

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
      </Routes>
    </BrowserRouter>
    </>    
  )
}

export default App