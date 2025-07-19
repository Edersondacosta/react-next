// 📌 Exercício 3 – Campo de nome com mensagem
// Descrição: Crie um campo de input. Conforme o usuário digita, exiba abaixo "Olá, [nome]!"
// Extra: Se o campo estiver vazio, exiba "Digite seu nome".

"use client"
import {useState} from "react"

export default function Main(){
    
    const [Nome, setNome] = useState("Digite seu nome")
    return(
        <div>
            Nome <input onChange={(e) => setNome(e.target.value)} className="border" type="text" name="nome" id="nome" placeholder="Digite seu nome"/>
            <p>Olá: {Nome}</p>
        </div>

    )
}