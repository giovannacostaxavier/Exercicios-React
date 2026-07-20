import { useContext } from "react";
import { ContextoNome } from "./ContextoNome";

const MostrarNome =()=>{
    const nome = useContext(ContextoNome)

    return(
        <p>Meu nome é {nome}</p>
    )
}

export default MostrarNome