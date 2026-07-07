import Tarefas from "./components/Tarefas"

const App= ()=> {
    const tarefas = [
  {id:3, titulo: "Levar cachorros pra passear", concluida: true },
  {id:1, titulo: "Estudar", concluida: true },
  {id:2, titulo: "Tomar banho", concluida:false}
  ]
  return (
   <div>
    <h2>Dados do projeto</h2>
    <Tarefas 
      tarefas={tarefas}
    />
   </div>

  )
}

export default App
