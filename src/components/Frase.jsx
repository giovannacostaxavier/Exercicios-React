import { useState } from "react";

const Frase =()=>{

    const [nome,setNome]= useState("Nada")

    return(
        <div>
            <p>{nome}</p>
            <input type="text" onChange={(evt)=> setNome(evt.target.value)} />
        </div>
        
    )


}

export default Frase