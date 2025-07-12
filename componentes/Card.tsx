export default function Card(){
  return(
    <div className="flex justify-center space-x-4 mt-3 mb-17">
      <div className="bg-amber-50 w-70 h-100 space-y-4 rounded-2xl shadow-2xl">
        <h1 className="text-1xl mt-5 ml-2 font-bold">Componente 1</h1>
        <p className="text-2sm ml-2">Esse é o conteúdo do primeiro cartão</p> {/* ml - margin left, top, button, right */}
      </div>
      <div className="bg-amber-50 w-70 h-100 space-y-4 rounded-2xl shadow-2xl">
        <h1 className="text-1xl mt-5 ml-2 font-bold">Componente 2</h1>
        <p className="text-2sm ml-2">Outro cartão com conteúdo diferente</p> {/* ml - margin left, top, button, right */}
      </div>
      <div className="bg-amber-50 w-70 h-100 space-y-4 rounded-2xl shadow-2xl">
        <h1 className="text-1xl mt-5 ml-2 font-bold">Componente 3</h1>
        <p className="text-2sm ml-2">Você pode adicionar quantos quiser</p> {/* ml - margin left, top, button, right */}
      </div>
    </div>

  )


}
