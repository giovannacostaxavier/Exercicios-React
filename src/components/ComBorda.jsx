const ComBorda =(Componente)=>{
    const novoComponente =()=>{
        return(
            <div style={{border: "2px solid white", padding: "10px"}}>
                 <Componente/>
            </div>
           
        )
    }
    return novoComponente
}
export default ComBorda