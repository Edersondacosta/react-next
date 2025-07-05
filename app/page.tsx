export default function Main(){
  return(
    <div className="flex h-screen bg-gray-300"> {/* h-screen 100% tela*/}

      <nav className="bg-blue-700 text-amber-50 w-80 space-y-8"> {/* w-80 largura da div space-y espaçamento entre linhas ou w */}
        <h1 className="text-4xl ml-5 mt-10">Menu</h1>
        <h2 className="text-5sm ml-10">Início</h2> {/* ml - margin left, top, button, right */}
        <h2 className="text-5sm ml-10">Perfil</h2>
        <h2 className="text-5sm ml-10">Configurações</h2>
        <h2 className="text-5sm ml-10">Sair</h2>
      </nav>

      <div className="flex-1">
        <div className="ml-10 mt-10">
          <h1 className="text-6xl font-bold">Bem-Vindo</h1>
        </div>


        <div className="flex justify-center items-center pt-20">


        <div className="flex-col bg-amber-100 w-200 h-130 space-y-2 rounded-xl">
          <div className="text-6xl font-bold text-center">
            <h1 className="pt-10">Login</h1>
          </div>

          <div  className="mt-2 ml-20 mr-20">
            <h1>Email</h1>
            <input className="rounded-sm focus:ring-blue-500 focus:outline-none focus:ring-2 shadow-lg mt-2 w-150 h-10" type="text" name="email" id="email" required placeholder="Digite seu email"/>
          </div>

          <div className="ml-20 mr-20">
            <h1 className="mt-2">Senha</h1>
            <input className="rounded-sm mt-2 h-10 w-150 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg" type="password" name="senha" id="senha" required placeholder="Digite sua senha"/>
          </div>

          <div className="text-center">
            <button type="submit" className="mt-2 bg-blue-900 w-60 h-15 rounded-xl">Enviar</button>
            <h1 className="mt-2">Ainda não tem acesso a conta?<a className="text-blue-800" href="https://www.google.com">Cadastre-se aqui</a></h1>
          </div>      
        </div>

        </div>
      </div>
    </div>
  )


}
