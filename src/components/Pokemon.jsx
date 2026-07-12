import { useState, useEffect } from "react";

const Pokemon =()=>{
    const [pokemons,setPokemons] = useState([])

    useEffect(()=>{
        const buscarPokemon= async ()=>{
                try {
                    const resposta = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=10`)
                     if (!resposta.ok) {
                        throw new Error(`A resposta falhou`);
                     }
                     const dados = await resposta.json()
                     setPokemons(dados.results)
                } catch (error) {
                    console.log(`Erro ${error.message}`);
                    
                    
                }
        }

        buscarPokemon()
    },[])
}