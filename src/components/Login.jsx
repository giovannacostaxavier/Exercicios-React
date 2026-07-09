import { useState } from "react";

const Login =()=>{
    const [logado,setLogado]= useState(false)
        return(
            <div>
                <p>
                    {logado ?"Bem vindo" : "Efetue o login"}
                </p>
                <button onClick={()=> setLogado(prevLog => !prevLog)}>
                    Mudar
                </button>
            </div>
        )
}
export default Login