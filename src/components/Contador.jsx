import { useState } from "react"

const Contador= ()=> {
 
  const [valor,setValor] = useState(0)
  return (

   <div>
    <p>{valor}</p>
    <button onClick={()=> setValor(prevValor => prevValor+1)}>+1</button>
   </div>

  )
}

export default Contador