import { useContext } from "react";
import { ContextoNome } from "./ContextoNome";

const TrocarNome =()=>{
    const {setNome} = useContext(ContextoNome)
    return(

        <button onClick={()=>setNome(prev => prev === "Giovanna" ? "Ana" : "Giovanna")}>Trocar nome</button>
    )
}

export default TrocarNome