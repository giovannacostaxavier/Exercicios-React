import { useContext } from "react";
import { ContextoContador } from "./ContextoContador";

const MostrarContador=()=>{
    const {cont} = useContext(ContextoContador)

    return(
       <p>O contador é {cont}</p>
    )
}

export default MostrarContador