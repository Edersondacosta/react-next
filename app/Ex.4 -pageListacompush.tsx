// 📌 Exercício 4 – Lista de tarefas simples
// Descrição: Crie um campo para digitar uma tarefa e um botão para adicioná-la a uma lista (array).
// Dica: Use useState([]) e atualize com setTarefas([...tarefas, novaTarefa])


"use client"
import {useState} from "react"

export default function Main(){
    const [lista, setlista] = useState<string[]>([])
    // variavel do tipo lista que recebe uma string <string[]>
    const [nome, setnome] = useState("")
    
    function Adicionar(){
        setlista([...lista,nome]);
        setnome(""); {/*Zerando o conteúdo do input*/}
        // ...lista pega tudo que tinha antes e adiciona o conteúdo do nome ("Append")
        // Como o é uma consta, foio passado com set
    }
    // Forçando a tipificação para a string

    // const [lista, setTarefa] = useState("")
    return(
        <div className="flex flex-col">
            Nome da tarefa <input onChange={(e)=> setnome(e.target.value)} className="border w-50" type="text" name="nome" id="nome" placeholder="Digite o nome da tarefa"/>
            <button onClick={Adicionar}  className="flex justify-left text-blue-900 bg-green-600 w-20 rounded ">Adicionar</button>
           
            {lista.map((item,i)=>(
            <div className="flex flex-col" key={(i)}>{/*É preciso definir uma key, para a div ser única*/}
                <p>{i+1} - {item}</p>
            </div>
        ))}        

        </div>


    )
}