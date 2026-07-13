import { useState, createContext } from "react"
import Cabecalho from "./components/Cabecalho"

export const ThemeContext = createContext()

const App= ()=> {

   const [modo,setModo]=useState("claro")
   return(
      <div>

         < ThemeContext.Provider value={{modo,setModo}}>
            <Cabecalho  />
         </ThemeContext.Provider>
         
         
      </div>
   )
  
   }
  

export default App

