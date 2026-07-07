
const ListaTarefas =({listaTarefas})=>{
    let res;
    let lista = listaTarefas.map((el)=>{
        if(el.concluida === true){
            res = "Concluida"
        }else{
             res = "Pendente"
            }
        return(
            <p key={el.id} >
              
                {el.id} {el.titulo} {res}
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