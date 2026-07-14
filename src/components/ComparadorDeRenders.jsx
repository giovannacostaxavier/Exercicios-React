import { useRef } from "react"
import { useState } from "react"

const ComparadorDeRenders =()=>{
    const [use,setuse]=useState(0)
    const referencia = useRef(0)  

    const contadorState =()=>{
        setuse(use +1)
    }

    const contadorRef =()=>{
        referencia.current = referencia.current +1
        console.log(`Valor da referencia agora : ${referencia.current}`);
    }

    console.log(`Conponente reinderizou!`);
    
    return(
        <div>
            <p>Contador com state: {use}</p>
            <button onClick={contadorState}>Incrementar State</button>

            <p>Contador com Ref: {referencia.current}</p>
            <button onClick={contadorRef}>Incrementar Ref</button>
        </div>
    )
}

export default ComparadorDeRenders