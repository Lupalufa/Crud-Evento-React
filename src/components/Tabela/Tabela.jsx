import { React, useState } from "react";
import Remover from "../../components/Remover/Remover"
import { data, Link } from "react-router-dom";
import database from "../../data/database"
import style from "./Tabela.module.css"
import Editar from "../Editar/Editar"


function Tabela({ tabela }) {
    const [remover] = useState(database.deletarEvento)
    const [editar] = useState(database.editarEvento)


    return (
        <>
            <table className={style.tabela}>
                <thead>
                    <tr>
                        <th>Evento</th>
                        <th>descrição</th>
                        <th>data</th>
                        <th>Hora</th>
                        <th className={style.acoes}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tabela.map((cards, index) => (
                        <tr>
                            <td>{cards.nome}</td>
                            <td>{cards.descricao}</td>
                            <td>{cards.data}</td>
                            <td>{cards.hora}</td>
                            <td> <a href="#">Editar</a>
                                {/* <Link key={cards.id} to={`${editar}/${cards.id}`}>
                                <Editar key={index} {...cards} />
                                </Link> */}
                                 
                                <Link key={cards.id} to={`${remover}/${cards.id}`}>
                                <Remover key={index} {...cards} />
                            </Link></td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Tabela