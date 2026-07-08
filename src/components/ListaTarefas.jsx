
const ListaTarefas =({listaTarefas})=>(
        <div>
            { listaTarefas.map((el)=>{
             let res;
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
       
    })}
        </div>
    )

export default ListaTarefas