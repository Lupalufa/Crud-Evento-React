import React, { useState } from "react";
import database from "../../data/database";

function Remover(){
    const [eventos] = useState(database.deletarEvento)
    return (
        <>
        <button onClick={database.deletarEvento}>Excluir</button>
        </>
    )
}

export default Remover