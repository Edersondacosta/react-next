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
// 📌 Exercício 1 – Contador com incremento e decremento
// Descrição: Crie dois botões: um para somar e outro para subtrair.
// Extra: Adicione uma verificação para que o número nunca fique abaixo de zero.

"use client"
import {useState} from "react"

export default function Index(){

    const [contador, setContador] = useState(0)
    function Aumentar(){
        setContador(contador +1)
        // Função que incrementa utilizando o setContador para mudar a constante
    }
    // setContador, função que vai atualizar a variável
    //useState = é o valor inicial, se for 0 vai iniciar em 0
    return(
        <div>
            <h1>contador: {contador}</h1>
            {/* <button onClick={Aumentar}> Clique</button> */}
            <button onClick={() => setContador(contador +1)}> Clique</button>

        </div>
    )
}