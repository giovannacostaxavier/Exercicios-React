
const Tarefas=({tarefas})=>(
        <div>
            {tarefas.map((el)=>(
                <p key={el.id}>
                    {el.titulo} {el.concluida ? "✅" : "❌"}
                </p>
            )
            )       
            }
        </div>
    )

export default Tarefas