import { useState } from "react";

const DadosPessoa=()=>{
    const[pessoa,setPessoa]= useState({ nome: "Gi", idade: 20 })

    return(
        <div>
            <p>{pessoa.nome}</p>
            <p>{pessoa.idade}</p>
            <button onClick={()=> setPessoa(prevPessoa =>( {...prevPessoa, idade:21}))}>Atualizar</button>
        </div>
    )
}
export default DadosPessoa