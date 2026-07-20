import { ContextoCor } from "./ContextoCor";


const ProviderCor =({children})=>{


    return(
        <ContextoCor.Provider value="Azul" >
            {children}
        </ContextoCor.Provider>
    )
}

export default ProviderCor