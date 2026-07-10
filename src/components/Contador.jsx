import { useEffect,useState } from "react"

const Contador= ()=> {
 
  const [valor,setValor] = useState(0)

    useEffect(()=>{
      console.log("componente carregou agora !");
    },[])

    useEffect(()=>{
        console.log(`O valor mudou para ${valor}`);
    },[valor])


    useEffect(()=>{
        if(valor >= 5){
          console.log("Você chegou no 5! 🎉");
        }
    },[valor])
  return (
   <div>
    <p>{valor}</p>
    <button onClick={()=> setValor(prevValor => prevValor+1)}>+1</button>
   </div>

  )
}

export default Contador