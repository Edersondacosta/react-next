type props = {
    titulo?:string   
    children: React.ReactNode
    funcao?: () => void 

}

export default function Area({titulo, children, funcao}:props){
  return(


    <div className="flex flex-1 flex-col bg-amber-50 h-50 mt-10 justify-center w-110 space-y-10 items-center shadow-2xl rounded-2xl">
        <div className="flex flex-col justify-center ">
        <h1 className="text-blue-900 font-bold text-3xl p-2">Área do Usuário</h1> {/* ml - margin left, top, button, right */}
        {children}
        <button className="bg-blue-900 text-amber-50 w-60 h-15 p-2 rounded-2xl p2" onClick={funcao}>Executar ação</button>
        </div>
   
    </div>



  )


}