"use client"
import { useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function App(){
    const rota = useRouter();

    // function HelloWorld(){
    //     console.log("Hello World"
    //     rota.push("/") //Uso quando preciso realizar algo antes de ir para a próxima tela
    //     )}
    
    return(

        <div>
           <Link href={"/usuario"}> teste</Link> 
           {/* <button onClick={HelloWorld}> teste</button> */}
        </div>
    )
}