import ListaTarefas from "./components/ListaTarefas"

const App= ()=> {
  const tarefas =[
    { id: 1, titulo: "Lavar louça", concluida: true },
    { id: 2, titulo: "Estudar", concluida: true },
    { id: 3, titulo: "Ir ao ginásio", concluida: false },
  ]
  return (
   <div>
    <h2>Dados do projeto</h2>
    <ListaTarefas
        listaTarefas={tarefas}
    />
   </div>

  )
}

export default App
