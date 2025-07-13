"use client"
import { useState } from "react"



export default function main(){
    const [contador, setContador] = useState(0)
    function atualizarContador(){
        setContador(contador+1)
    }

    function subtrair(){
        contador>0? setContador (contador-1): setContador(0)
    }

    // const x = 0

    return(
        <div className="flex flex-col w-40">
            <p className=" mt-5 ml-5 border w-40 p-2 flex justify-center">{contador}</p>
            <p className="bg-green-600 mt-5 ml-5 p-2 w-40 flex justify-center rounded"><button onClick={() => setContador (contador+1)}>Somar</button></p>
            <p className="bg-red-700 mt-5 ml-5 w-40 p-2 flex justify-center rounded"><button onClick={(subtrair)}>Subtrair</button></p>
        </div>
    )
    
}
