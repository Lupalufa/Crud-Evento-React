import React from "react";
import { Link } from "react-router-dom";
import HeaderEvento from "../../components/HeaderEventos/HeaderEventos";
import MainEvento from "../../components/MainEventos/MainEventos";
import Footer from "../../components/Footer/Footer";

function Eventos(){
    return (
        <>
        <HeaderEvento />
        <MainEvento />
        <Footer />
        </>
    )
}

export default Eventos