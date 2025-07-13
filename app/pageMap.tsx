function Componente(){
    // const lista = [1,2,3,4,5,6,7,8,9,10]
    const lista=[
        {
            id:1,
            nome:"Ederson",
            idade:41,
            fone:99999999999999,
            endereco:{
                bairro:"ima",
                rua:"aracaju"
            }
        },
        {
            id:2,
            nome:"João",
            idade:30,
            fone:8888888888888888,
            endereco:{
                bairro:"centro",
                rua:"afonso pena"
            }
        }
    ]

return(
    <div>
        {lista.map((item)=>(
            <div className="flex flex-col border" key={(item.id)}>{/*É preciso definir uma key, para a div ser única*/}
                <p>{item.id}</p>
                <p>{item.nome}</p>
                <p>{item.idade}</p>
                <p>{item.fone}</p>
                <p>{item.endereco.bairro}</p>
                <p>{item.endereco.rua}</p>
            </div>

        ))}
        {/* Return retorna apenas um elemento */}
    </div>
)
}

export default function main(){
    return(
        <div>
            <Componente/>
        </div>
    )
    
}
