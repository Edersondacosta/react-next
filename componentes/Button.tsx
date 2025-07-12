type props = {
    color:"azul" | "verde" | "vermelho"
    titulo:string   
    subtitulo?:string
    funcao?: () => void 

}


export default function Button({color, titulo, subtitulo, funcao}:props){
    let corBase = ""
    switch (color) {
        case "azul":
            corBase = "bg-blue-500"
            break;
        case "verde":
            corBase = "bg-green-500"
            break;
        case "vermelho":
            corBase = "bg-red-500"
            break;
        default:
            break;
            
}
return(
<button 
onClick={funcao} 
className={`${corBase}`}>{titulo}

</button>

)


}