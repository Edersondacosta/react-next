import Button from "@/componentes/button"
import MeuComponente from "@/componentes/MeuComponente"

export default function Main(){
  return(
    <div className="flex flex-col">
    <MeuComponente nome="Ederson" idade={41}/>
    <Button color="azul" titulo="Botão"/>
    <Button color="verde" titulo="Botão"/>
    <Button color="vermelho" titulo="Botão"/>
    
    </div>
    
  )
  
    }
  



