import ListaFilmes from "./components/ListaFilmes"

const App= ()=> {
  const filmes =[
    { id: 1, titulo: "Crepúsculo", nota: 8, assistido: true },
    { id: 2, titulo: "Matrix", nota: 9.5, assistido: true },
    { id: 3, titulo: "Duna 2", nota: 9, assistido: false },
  ]
  return (
   <div>
    <h2>Dados do projeto</h2>

    <ListaFilmes
      filmes={filmes}
    />
   </div>

  )
}

export default App
