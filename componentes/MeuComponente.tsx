type props = {
    nome: string
    idade: number
    // Eu tipifico aqui para quando tiver várias variáveis, e assim chamar so pelo nome, e usar os mesmos nomes.
}


export default function MeuComponente({nome,idade}:props){
    return(
        <div>
            <h1 className="text-2xl">Olá, meu nome é {nome} e minha idade é {idade}</h1>
        </div>
    )
}