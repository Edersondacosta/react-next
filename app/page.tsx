"use client"
import Area from "@/componentes/Area";

function clique(){
  console.log("Clique")
  alert("Clique")
}

export default function Main(){
  return(
<div className="flex h-screen bg-neutral-100 justify-center items-center"> {/* h-screen 100% tela*/}
        <div className="">
        <div className="">
          <Area funcao={clique}>
          <p className="text-5sm p-2">Bem-vindo ao sistema! esse pedaço veio do children</p> {/* ml - margin left, top, button, right */}
          </Area>
        </div>
        </div>
</div>

  )
}
