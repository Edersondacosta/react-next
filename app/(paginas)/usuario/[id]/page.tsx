import Link from "next/link"

type userProps = {
 id: number
 body: number
 title: string
 userId: number
}

export default async function User ({params}:{params: Promise<{id:string}>}){
    //O id tem que ser o mesmo nome da pasta, no exemplo id
    const {id} = await params;
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const dados:userProps[] = await resposta.json()
    console.log(dados)
    
    return(
        <div>
            {dados.map((item) => (
                <div key={item.id}>
                    <h1>id: {item.id}</h1>
                    <h1>id: {item.title}</h1>
                    <h1>id: {item.body}</h1>
                </div>
                ))}

        </div>

            )}
