import Link from "next/link"

type userProps = {
 id?: number
 name: string
 username: string
 email: string
 }

export default async function User (){
    
    
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
    const dados:userProps[] = await resposta.json()
    console.log(dados)
    
    return(
        <div>
            {dados.map((item) => (
                <div key={item.id} className="border">
                    <ul className="m-1">
                        <li>
                            <p>id: {item.name}</p>
                            <p>id: {item.username}</p>
                            <p>id: {item.email}</p>
                            <button><Link href={`/usuario/${item.id}`} className="text-red-700 ">Ir para</Link></button>
                        </li>
                    </ul>
                </div>
                ))}

        </div>

            )}
