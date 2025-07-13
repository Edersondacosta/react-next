"use client"

import { useState } from "react"

export default function main(){
    const [contador, setContador] = useState(0)
    function atualizarContador(){
        setContador(contador+1)
    }
    // const x = 0
    return(
        <div>
            {contador}
            <button onClick={atualizarContador}>Atualizar</button>
            {/* <button onClick={() => setContador (contador+1)}>Atualizar</button> também funciona sem usar a função */}

        </div>
    )
    
}
