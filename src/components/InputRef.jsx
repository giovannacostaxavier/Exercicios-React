import { useEffect,useRef } from "react"

const InputRef =()=>{
    
    const referencia = useRef(null);

    useEffect(()=>{
        referencia.current.focus()

    },[]);

    return(
        <input type="text" ref={referencia} placeholder="Digite algo aqui"/>
    )

    }
    
   

export default InputRef