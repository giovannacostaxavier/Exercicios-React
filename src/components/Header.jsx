import { useContext } from "react"
import { novoContexto } from "./ThemeContext"

const Header =()=>{
    const {mood} = useContext(novoContexto)
    return(
        <div>
            <p style={{backgroundColor: mood === "Modo Claro" ? "white" : "black"}}>{`O modo é ${mood}`}</p>
        </div>
    )
}

export default Header