// 📌 Exercício 5 – Contador de cliques em várias cores
// Descrição: Mostre três botões com cores diferentes. Ao clicar em cada botão, ele soma +1 ao seu próprio
// contador.
// Exemplo: Vermelho: 3 cliques, Azul: 5 cliques, Verde: 1 clique.

"use client"
import {useState} from "react"

export default function Main(){
    const [contadorred, setcontadorred] = useState(0)
    const [contadorblue, setcontadorblue] = useState(0)
    const [contadorgreen, setcontadorgreen] = useState(0)

    function reset(){
        setcontadorgreen(0)
        setcontadorred(0)
        setcontadorblue(0)
    }
    return(
<div className="flex flex-col">
    <div className="">
        <button onClick={() => setcontadorred(contadorred +1)}  className="flex justify-left text-blue-900 bg-red-600 w-20 rounded ">{contadorred}</button>
    </div>
    <div className="">
        <button onClick={() => setcontadorblue(contadorblue +1)}  className="flex justify-left text-blue-900 bg-blue-600 w-20 rounded ">{contadorblue}</button>
    </div>
    <div className="">
        <button onClick={() => setcontadorgreen(contadorgreen +1)}  className="flex justify-left text-blue-900 bg-green-600 w-20 rounded ">{contadorgreen}</button>
    </div>
    <div className="">
        <button onClick={(reset)}  className="flex justify-left text-amber-50 bg-black w-20 rounded ">Reset</button>
        {/* Não posso utilizar o vários sets, nesse caso utilizamos uma função */}
    </div>

</div>

    )
}