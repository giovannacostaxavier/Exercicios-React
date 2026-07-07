
const ListaTarefas =({listaTarefas})=>{

    let lista = listaTarefas.map((el)=>{
        return(
            <p key={el.id} >
                {el.id} {el.titulo} {el.concluida}
            </p>
        )
        
        
    })
    return(
        
        <div>
            {lista}
        </div>
    )
}
export default ListaTarefas