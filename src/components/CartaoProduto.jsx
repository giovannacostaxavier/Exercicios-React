
const CartaoProduto = ({nome,preco,disponivel})=>{

    let res

    if(disponovel === true){
        res = "Disponivel"
    }else{
        res = "Indisponovel"
    }
    return(
        <div>
            <p>Produto : {nome}, Preço: {preco.toFixed(2)}, Disponibilidade: {res}</p>
        </div>
    )
}

export default CartaoProduto