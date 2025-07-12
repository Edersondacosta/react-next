export default function Nav(){
    return(
        <div className="flex h-screen bg-blue-700 text-amber-50 space-y-2 w-50" >
            <div>
                <h1 className="ml-2 mt-5 font-bold">Menu</h1>
                <p className="ml-4 mt-6">Início</p>
                <p className="ml-4 mt-6">Usuários</p>
                <p className="ml-4 mt-6">Sair</p>
            </div>
        </div>
    )
}