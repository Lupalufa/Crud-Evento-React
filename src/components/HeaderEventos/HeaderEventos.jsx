import React from "react";
import style from "./HeaderEventos.module.css"
import img from "../../assets/img/PartyTrack.jpg"

function HeaderEvento() {
    return (
        <>
            <header>
                {/* <img src={img} alt="/" /> */}
                <h1>PartyTrack</h1>
            </header>
            <div className={style.divisao}> 
                <a href="#">Cadastrar Evento</a>
                <a href="#">Lista de Eventos</a>
                <a href="#">Editar Evento</a>
            </div>
        </>
    )
}

export default HeaderEvento