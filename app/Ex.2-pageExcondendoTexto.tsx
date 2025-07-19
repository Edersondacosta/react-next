// export default function Index(){

//     // const lista = [1,2,3,4,5,6]
//     const lista = [
//         {
//             id: 1,
//             nome:"Ederson",
//             idade: 41
//         },
//         {
//             id: 2,
//             nome:"Ederson",
//             idade: 41
//         },
// ]
//     return(
//         <div>
//             {lista.map((valor, index) =>(
//                 <div>
//                     <div key={valor.id}>
//                         {/* <h1>Índice da lista: {index} Item da lista: {valor}</h1> */}
//                         <h1>Índice da lista: {index} Item da lista - nome: {valor.nome} Item da lista - idade: {valor.idade}</h1> 
//                     </div>
//                 </div>

//             ))}
//         </div>
//     )
// }

// 📌 Exercício 2 – Mostrar/esconder texto
// Descrição: Crie um botão que ao ser clicado alterna entre mostrar e esconder um parágrafo de texto.
// Dica: Use boolean no useState.
"use client"
import {useState} from "react"

export default function Index(){

    // const Texto="Ederson"
    const [Texto, setTexto] = useState("Ederson")
    // setContador, função que vai atualizar a variável
    //useState = é o valor inicial, se for 0 vai iniciar em 0
    return(
        <div>
            <h1>Texto: {Texto}</h1>
            {/* <button onClick={Aumentar}> Clique</button> */}
            <button onClick={() => setTexto("")}> Clique</button>
        </div>
    )
}