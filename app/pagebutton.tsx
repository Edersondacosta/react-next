"use client"
import Button from "@/componentes/Button"
import MeuComponente from "@/componentes/MeuComponente"

function helloWorld(){
  console.log("hello World")
}


export default function Main(){
  return(
    <div className="flex flex-col">

    <MeuComponente nome="Ederson" idade={41}/>
    <Button color="azul" titulo="Botão"/>
    <Button color="verde" titulo="Botão"/>
    <Button color="vermelho" titulo="Botão"/>
    
    
     <Button color="vermelho" titulo="Botão" subtitulo="Costa" funcao={helloWorld} />
     
    
    </div>
    
  )
  
    }
  



