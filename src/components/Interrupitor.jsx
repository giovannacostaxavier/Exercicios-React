import { useState } from "react"

const Interrupitor =({children})=>{
    const [int,setInt] = useState(false)

    const LigaDesliga =()=> setInt(prevInt => !prevInt)

    return(
        <div>
            {children(int)}
            <button onClick={LigaDesliga}>Alterar</button>
        </div>
    )
}
export default Interrupitor