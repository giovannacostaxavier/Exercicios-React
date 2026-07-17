
const ComAviso =(Componente)=>{
    const NovoComponente =({bloqueado})=>{
        return(
            bloqueado ? <p>Acesso bloqueado.</p> : <Componente />
        )
        
    }
    return NovoComponente
}

export default ComAviso