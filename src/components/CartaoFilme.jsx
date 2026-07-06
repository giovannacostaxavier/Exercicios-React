
const CartaoFilme = ({titulo,nota,assistido})=>{

    let res

    if(assistido === true){
        res = "Já assisti"
    }else{
        res = "Ainda não assisti"
    }
    return(
        <div>
            <p>
                Titulo do filme: {titulo}, Nota: {nota} Assistido ? {res}
            </p>
        </div>
    )



}
export default CartaoFilme