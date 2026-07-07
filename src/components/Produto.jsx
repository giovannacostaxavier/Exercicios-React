
const Produto =({produtos})=>{
    const lista = produtos.map((el)=>{
        return(
        <p key={el.id}>
            {el.nome} - {el.preco}
        </p>)
        
    })
    return(
        <div>
            {lista}
        </div>
    )
}

export default Produto