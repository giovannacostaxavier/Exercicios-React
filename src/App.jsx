import CartaoProduto from "./components/CartaoProduto"


const App= ()=> {
  
  return (
   <div>
    <h2>Dados do projeto</h2>

    <CartaoProduto
    
    nome= "Iphone"
    preco= {1200}
    disponivel= {true}
    
    />
   </div>

  )
}

export default App
