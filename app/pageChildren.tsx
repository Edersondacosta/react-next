"use client"
import Area from "@/componentes/Area";
import Link from "next/link";

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
          <Link href="/page2">
            Clique Aqui
          </Link>
        </div>
        </div>
</div>

  )
// Quando eu coloco um children eu personalizo o componente
}
