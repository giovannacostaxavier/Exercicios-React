import { useState,useEffect } from "react";

const RickMorty =()=>{
    const [buscarRickMorty,setbuscarRickMorty]=useState({})
    
    useEffect(()=>{
        const busca = async ()=>{
            try {
                const resposta = await fetch('https://rickandmortyapi.com/api/character/1')
                if (!resposta.ok) {
                    throw new Error(`A resposta falhou`)
                }
                const dados = await resposta.json()
                setbuscarRickMorty(dados)
                
                
            } catch (error) {
                console.log(`A busca falhou ${error.message}`);
            }
        }
        busca()
    },[])
        return(
            <div>
                <p>
                    {buscarRickMorty.name} {buscarRickMorty.status} {buscarRickMorty.species}
                </p>
            </div>
        )

}

export default RickMorty 