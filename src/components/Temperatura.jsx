import { useState } from "react"

const Temperatura =({children})=>{
    const [temp,setTemp] = useState (20)


    const aumentar =()=> setTemp(prevValue => prevValue +1)
    const diminuir =()=> setTemp(prevValue => prevValue -1)
    return(
        <div>
            {children(temp)}
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
}
export default Temperatura