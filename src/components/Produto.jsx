
const Produto =({produtos})=>(
        <div>
            {produtos.map((el)=>(
                <p key={el.id}>
                    {el.nome} - {el.preco}
                </p>
                )
        
            )}
        </div>
        )


export default Produto