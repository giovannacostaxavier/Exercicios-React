import Perfil from "./components/Perfil"

const App= ()=> {
 
  return (
   <div>
    <h2>Dados do projeto</h2>
    <Perfil
      nome="Giovanna"
      idade={29}
      profissao="Engenheira de Software"
    />

     <Perfil
      nome="Koll"
      idade={3}
      profissao="O cachorro mais lindo do mundo"
    />

     <Perfil
      nome="Finn"
      idade={29}
      profissao="Engenheira de Software"
    />
   </div>

  )
}

export default App
