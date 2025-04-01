import React from "react";
import { Link } from "react-router-dom"
import style from "./Main.module.css"
import cards from "../../data/database"
import Card from "../Cards/Card"

function Main(){
    return (
        <main>
            {
                cards.map((cards, index) => (
                    
                    <section>
                        <Card key={index} {...cards} />
                    </section>
                ))
            }

        </main>
    )
}

export default Main