// 📌 Exercício 6 – Simulador de likes
// Descrição: Crie um botão de "Curtir" que alterna entre "Curtir" e "Descurtir", e mostra o total de curtidas.
// Dica: Use um booleano para o estado do botão e um número para o total de curtidas.

"use client"
import {useState} from "react"

import {AiFillDislike, AiFillLike} from "react-icons/ai";




export default function Man(){
    
    const [liked, setliked] = useState(false)
    const [likes, setlikes] = useState(0)
    function ok(){
        if (liked){
            setliked(false)
            setlikes(likes-1)
        }
        else{
            setliked(true)
            setlikes(likes+1)
        }
            
            
        }
     
        
    
    
    return(

        <div>
            {/* <button>AAA <AiFillDislike /></button>
            <button>AAA <AiFillLike /></button> */}
            <button onClick={(ok)}  className="flex justify-left text-blue-900 bg-red-600 w-20 rounded ">
                {liked?<AiFillLike />:<AiFillDislike />}
                </button>
                <p>{likes}</p>
                <p>Curtir</p>
            


 

        </div>
        
    )
}