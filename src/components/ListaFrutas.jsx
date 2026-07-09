import { useState } from "react";

const ListaFrutas =()=>{

    const [frutas,setfrutas] = useState(["maça","banana"])
        return(
            <div>
               
             <ul>
                 {frutas.map((el)=>(
                        
                         <li key={el}>{el}</li>
                        
                    )
                )}

             </ul>
             <button onClick={()=>setfrutas(prevFrutas =>([...prevFrutas,"laranja"]))}>Adicionar</button>
            </div>
        )
}
export default ListaFrutas