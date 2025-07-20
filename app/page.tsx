// "use client"
import { useState } from "react"

type userProps = {
        id:number
        title:string
        price:number
        description:string
        category:string
        image:string
        rating:{
            rate:number
            count:number
        }
    
}

export default async function Main(){
    const resposta = await fetch("https://fakestoreapi.com/products")
    const data:userProps[] = await resposta.json()
    return(
    // ---------------------------------------------------
   
    //Os dados vem em json, estamos descompactando os dados json lista de objeto no exemplo [ {
    //usei cons
        <div className="flex bg-gray-100">
            <div className="flex fixed top-0 left-0 w-60 bg-gray-800 text-amber-50 h-screen">
                <nav>
                    <p className="ml-1 pt-10 text-2xl">Menu</p>
                    <p className="ml-5 text-sm pt-5">Início</p>
                    <p className="ml-5 text-sm pt-5">Produtos</p>
                    <p className="ml-5 text-sm pt-5">Categorias</p>
                    <p className="ml-5 text-sm pt-5 ">Contato</p>
                </nav>
            </div>
            <div className="flex flex-wrap m-15 shadow-2xs ml-85">
                {data.map((item,i)=>(
                <div className="flex flex-col m-2 w-70 h-90 bg-white rounded-2xl shadow-2xl" key={(i)}>{/*É preciso definir uma key, para a div ser única*/}
                        <p className="mb-5 flex justify-center hover:opacity-30"><img className="w-25 h-30 mt-2" src={item.image} alt="Imagem"/> </p>
                        <p className="m-1 font-bold h-10 text-1xl">{item.title.slice(0,50)} </p>
                        <p className="text-green-600 m-1 font-bold">U$ {item.price.toFixed(2)} </p>
                        <p className="text-sm flex-wrap h-10 m-1">{item.description.slice(0,90)} </p>
                        {/* .slice(0,25) limita o texto de uma variável*/}
                        <p className="cursor flex justify-center mt-10 m-1"><a href="https://www.google.com"><button className="bg-blue-700 rounded-2xl w-50 h-10 text-amber-50 center cursor-pointer">Ver Mais</button></a></p>
                        
                </div>
                ))} 
            </div>
        </div>
 

        // -------------------------------------------------------
    )
}