import { useContext } from "react";
import { ContextoNome } from "./ContextoNome";

const TrocarNome =()=>{
    const {setNome} = useContext(ContextoNome)
    return(

        <button onClick={()=>setNome("Ana")}>Trocar nome</button>
    )
}

export default TrocarNome