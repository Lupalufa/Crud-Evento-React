import React, { useState } from "react";
import { Link } from "react-router-dom"
import style from "./Main.module.css"
import database from "../../data/database"
import Card from "../Cards/Card"

function Main(){
    const [eventos] = useState(database.listarEventos)

    return (
        <main>
            {
                eventos.map((cards, index) => (
                    
                    <section>
                        <Card key={index} cards ={cards} />
                    </section>
                ))
            }

        </main>
    )
}

export default Main