import { useState } from "react"
import { novoContexto } from "./ThemeContext"


const ThemeProvider =({children})=>{
    const [mood,setMood]=useState("Modo Claro")

    const toggleTheme =()=>{
        setMood(mood == "Modo Claro" ? "Modo Escuro" : "Modo Claro")
    }
    return(
        <div>
            <novoContexto.Provider value={{toggleTheme,mood}}>
                <p>{children}</p>
            </novoContexto.Provider>
        </div>
    )
}

export default ThemeProvider