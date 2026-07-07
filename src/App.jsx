import Produto from "./components/Produto"

const App= ()=> {
    const produtos = [
  {id:3, nome: "Camisa", preco: 49.9 },
  {id:1, nome: "Calça", preco: 89.9 },
  {id:2, nome: "Tênis", preco: 199.9 }
  ]
  return (
   <div>
    <h2>Dados do projeto</h2>
    <Produto 
      produtos={produtos}
    />
   </div>

  )
}

export default App
