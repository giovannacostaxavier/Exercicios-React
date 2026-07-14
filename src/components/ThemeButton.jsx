import { useContext } from "react"
import { novoContexto } from "./ThemeContext"

const ThemeButton =()=>{
    const {toggleTheme} = useContext(novoContexto)
    return(
        <button onClick={toggleTheme}>
            Atualizar
        </button>
    )
}

export default ThemeButton