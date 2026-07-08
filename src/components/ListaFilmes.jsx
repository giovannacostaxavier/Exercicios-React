import CartaoFilme from "./CartaoFilme"

const ListaFilmes=({filmes})=>(
        <div>
            {filmes.map((el)=>(
            <CartaoFilme key={el.id} titulo={el.titulo} nota={el.nota} assistido={el.assistido} />
            )
                )}
        </div>
    )


    export default ListaFilmes