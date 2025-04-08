import React from "react";
import style from "./HeaderEventos.module.css"
import img from "../../assets/img/PartyTrack.jpg"
import { Link } from "react-router-dom";

function HeaderEvento() {
    return (
        <>
            <header>
                {/* <img src={img} alt="/" /> */}
                <h1>PartyTrack</h1>
            </header>
            <div className={style.divisao}> 
                <Link to="/FormularioCadastro">Cadastrar Eventos</Link>
                <Link to="/Eventos">Listar Eventos</Link>
                <Link to="/EditarEvento">Editar Eventos</Link>

            </div>
        </>
    )
}

export default HeaderEvento