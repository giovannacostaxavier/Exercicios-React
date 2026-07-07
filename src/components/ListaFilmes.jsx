import CartaoFilme from "./CartaoFilme"

const ListaFilmes=({filmes})=>{

    const cartaoFilme = filmes.map((el)=>{
        return(
            <CartaoFilme key={el.id} titulo={el.titulo} nota={el.nota} assistido={el.assistido} />
        )
    })
    return(
        <div>
            {cartaoFilme}
        </div>
    )
}

    export default ListaFilmes