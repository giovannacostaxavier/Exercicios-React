import { useState } from "react"
import { novoContexto } from "./ThemeContext"


const ThemeProvider =({children})=>{
    const [mood,setMood]=useState("Modo Claro")

    const toggleTheme =()=>{
        setMood(mood == "Modo Claro" ? "Modo Escuro" : "Modo Claro")
    }
    return(
        
            <novoContexto.Provider value={{toggleTheme,mood}}>
                {children}
            </novoContexto.Provider>
        
    )
}

export default ThemeProvider