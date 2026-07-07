
const Tarefas=({tarefas})=>{
    
    let lista=tarefas.map((el)=>{
        
        return(
            <p key={el.id}>
                {el.titulo} {el.concluida === true ? "✅" : "❌"}
            </p>
        )
    })

    return(
        <div>
            {lista}
        </div>
    )
}
export default Tarefas