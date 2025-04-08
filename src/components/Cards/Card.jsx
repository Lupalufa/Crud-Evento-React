import React from "react";
import style from "./Card.module.css"


function Card({ cards }) {
    return (
        <div className={style.cardContainer}>
            <div className={style.card}>
                <img className={style.imagem} src={cards.imagem} alt={cards.nome} />
                <div className={style.cardInfo}>
                    <h2 className={style.titulo}>{cards.nome}</h2>
                    <p className={style.paragrafo}>{cards.descricao}</p>
                    <div className={style.paragrafoDataHora}>
                        <p className={style.paragrafoData}>{new Date(cards.data).toLocaleDateString("pt-BR")}</p>
                        <p className={style.paragrafoHora}>{cards.hora}</p>
                    </div>
                    <div className={style.btn}>
                        <button>Sobre</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card