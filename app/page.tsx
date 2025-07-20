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
            <div className="flex w-100 bg-gray-800 text-amber-50 h-screen">
                <nav>
                    <p>Manu</p>
                    <p className="ml-5 text-sm pt-5">Início</p>
                    <p className="ml-5 text-sm pt-5">Produtos</p>
                    <p className="ml-5 text-sm pt-5">Categorias</p>
                    <p className="ml-5 text-sm pt-5 ">Contato</p>
                </nav>
            </div>
            <div className="flex flex-wrap m-15 shadow-2xs ">
                {data.map((item,i)=>(
                <div className="flex flex-col m-2 w-50 h-70 bg-white rounded-2xl" key={(i)}>{/*É preciso definir uma key, para a div ser única*/}
                        <p className="flex justify-center"><img className="w-15 h-20 mt-2" src={item.image} alt="Imagem"/> </p>
                        <p className="m-2 text-sm font-bold h-10">{item.title.slice(0,30)} </p>
                        <p className="text-green-600 ">U$ {item.price} </p>
                        <p className="text-sm flex-wrap h-10">{item.description.slice(0,25)} </p>
                        {/* .slice(0,25) limita o texto de uma variável*/}
                        <p className="flex justify-center mt-10"><button className="bg-blue-700 rounded w-40 text-amber-50 center ">Ver Mais</button></p>

                </div>
                ))} 
            </div>
        </div>
 

        // -------------------------------------------------------
    )
}