import { useState } from "react";
import { ContextoNome } from "./ContextoNome";


const ProvedorNome=({children})=>{
    const [nome,setNome]=useState("Giovanna")

    return(
        <ContextoNome.Provider value={{nome,setNome}}>
            {children}
            
        </ContextoNome.Provider>
    )
}
export default ProvedorNome