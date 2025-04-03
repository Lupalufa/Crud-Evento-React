import { React, useState } from "react";
import style from "./MainEventos.module.css"
import database from "../../data/database"
import Tabela from "../Tabela/Tabela"

function MainEvento() {
    const [eventos] = useState(database.listarEventos)

    return (
        <main>
            {/* {
                eventos.map((cards) => (
                    
                    <section>
                        <Tabela key={cards.id} tabela={cards} />
                    </section>
                ))
            } */}

            <Tabela tabela={eventos}/>
        </main>
    )
}

export default MainEvento;