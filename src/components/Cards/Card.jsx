import React from "react";
import style from "./Card.module.css"


function Card({ imagem, nome, descricao, data, hora }) {
    return (
        <div className={style.card}>
            <img className={style.imagem} src={imagem} alt={nome} />
            <div className={style.cardinfo}>
                <h2 className={style.titulo}>{nome}</h2>
                <p className={style.paragrafo}>{descricao}</p>
                <div className={style.paragrafoDataHora}>
                    <p className={style.paragrafoData}>{data}</p>
                    <p className={style.paragrafoHora}>{hora}</p>
                </div>
            </div>
        </div>
    )
}

export default Card