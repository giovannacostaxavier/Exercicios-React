import { useContext } from "react";
import { ContextoContador } from "./ContextoContador";

const Botaocont=()=>{
    const {setCont} = useContext(ContextoContador)
    return (
        <button onClick={()=>setCont(prevValue => prevValue+1)}>Incrementar</button>
    )

}
export default Botaocont