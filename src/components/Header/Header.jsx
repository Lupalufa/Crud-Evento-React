import React from "react";
import style from "./Header.module.css"
import img from "../../assets/img/PartyTrack.jpg"

function Header() {
    return (
        <>
            <header>
                {/* <img src={img} alt="/" /> */}
                <h1>PartyTrack</h1>
            </header>
            <div className={style.divisao}>
                <a href="#">Teatro</a>
                <a href="#">Festival</a>
                <a href="#">Evento Tec</a>
                <a href="#">Workshop</a>
                <a href="#">Feira de Negócios</a>
            </div>
        </>
    )
}

export default Header