type props = {
    children: React.ReactNode
    funcao?: () => void 
}

export default function CardComp({children, funcao}:props){
  return(
    <div className="flex flex-col bg-amber-50 h-30 mt-10 w-280 space-y-10 shadow-2xl rounded ml-5 mr-5">
        <div className="flex flex-col justify-center ">
        {children}
        <a className= "text-blue-900 ml-5" onClick={funcao}>Ver detalhes</a>
        </div>
   </div>
  )
}