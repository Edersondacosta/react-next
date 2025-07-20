///Consumindo API

import { useState } from "react"
// API jason placeholder https://jsonplaceholder.typicode.com

//Nesse exemplo a função tem que ser assyncron, para esperar os dados usa-se a função async na função
//Se não utilizar o await o consolo.log fica com pendente

type userProps = {
    id:number,
    name:string,
    username:string,
    email:string
    address:{
        city:string
    }
}

export default async function main(){
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
    const data:userProps[] = await resposta.json()
    //Os dados vem em json, estamos descompactando os dados json lista de objeto no exemplo [ {
    //usei cons

    console.log(resposta)
    return(
        <div>
            {data.map((item,i)=>(
            <div className="flex flex-col" key={(i)}>{/*É preciso definir uma key, para a div ser única*/}
                    <p className="border m-2">{i+1} - Nome: {item.name} - Email: {item.email} - Username: {item.username} Cidade: {item.address.city}</p>
            </div>
        ))} 
        </div>
    )
}