import { useContext } from "react";
import { ContextoNome } from "./ContextoNome";

const SaudacaoNome=()=>{
    const {nome} = useContext(ContextoNome)

    return(
        <p>Olá {nome}</p>
    )
}

export default SaudacaoNome