import { useContext } from "react"
import { ContextoCor } from "./ContextoCor"

const MostrarCor=()=>{
     const cor = useContext(ContextoCor)
     return(
        <p>Minha cor favorita é {cor}</p>
     )
}

export default MostrarCor