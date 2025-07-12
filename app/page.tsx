"use client"
import CardComp from "@/componentes/CardComp";
import Nav from "@/componentes/Nav";

function clique(){
  console.log("Clique")
  alert("Clique")
}
export default function main(){
    return(
        <div className="flex bg-neutral-100">
           <Nav/>
            <div className="flex flex-col h-screen">
                <CardComp funcao={clique}>
                  <p className="text-5sm ml-5 mt-5 font-bold">Alice</p> {/* ml - margin left, top, button, right */}
                  <p className="text-5sm ml-5">alice@email.com</p> {/* ml - margin left, top, button, right */}
                </CardComp>
                <CardComp funcao={clique}>
                  <p className="text-5sm ml-5 mt-5 font-bold">Bruno</p> {/* ml - margin left, top, button, right */}
                  <p className="text-5sm ml-5">Bruno@email.com</p> {/* ml - margin left, top, button, right */}
                </CardComp>
                <CardComp funcao={clique}>
                  <p className="text-5sm ml-5 mt-5 font-bold">Carla</p> {/* ml - margin left, top, button, right */}
                  <p className="text-5sm ml-5">carla@email.com</p> {/* ml - margin left, top, button, right */}
                </CardComp>
            </div>
        </div>
    )
}