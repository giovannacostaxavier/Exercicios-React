import { useState } from "react";
import { ContextoContador } from "./ContextoContador";

const ProvedorContador =({children})=>{
    const [cont,setCont]= useState(0)
    return(
        <ContextoContador.Provider value={{cont,setCont}}>
            {children}
        </ContextoContador.Provider>
    )
}

export default ProvedorContador