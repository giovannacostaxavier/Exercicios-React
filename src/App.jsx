import CartaoFilme from "./components/CartaoFilme"


const App= ()=> {
  
  return (
   <div>
    <h2>Dados do projeto</h2>

    <CartaoFilme 
      titulo = "Crepúsculo"
      nota = {8} 
      assistido = {true}
    
    
    />
   </div>

  )
}

export default App
