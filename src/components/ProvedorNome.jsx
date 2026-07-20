import { ContextoNome } from "./ContextoNome";

const ProvedorNome=({children})=>{
    return(
        <ContextoNome.Provider value="Giovanna">
            {children}
        </ContextoNome.Provider>
    )
}
export default ProvedorNome