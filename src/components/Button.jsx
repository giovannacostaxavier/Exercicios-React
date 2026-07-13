import { useContext } from "react"
import {ThemeContext} from "../App"

const Button =()=>{
    const {modo,setModo} = useContext(ThemeContext)
    return(
        <div>
            <button onClick={()=>{
                if (modo =="claro") {
                    setModo("escuro")
                }else{
                    setModo("claro")
                }
            }}>

            Atualizar tema</button>
        </div>
    )
}

export default Button