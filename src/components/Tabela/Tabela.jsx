import { React, useState } from "react";
import Remover from "../../components/Remover/Remover"
import { Link } from "react-router-dom";

function Tabela({tabela}) {


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Evento</th>
                        <th>descrição</th>
                        <th>data</th>
                        <th>Hora</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tabela.map((cards, index) => (
                        <tr>
                        <td>{cards.nome}</td>
                        <td>{cards.descricao}</td>
                        <td>{cards.data}</td>
                        <td>{cards.hora}</td>
                        <td><a href="#">Editar</a></td>
                        <td><Link key = {data}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}

export default Tabela