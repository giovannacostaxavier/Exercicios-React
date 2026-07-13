import ComponenteB from "./ComponenteB"
import { useState,createContext } from "react"

export const UserContext = createContext();

const ComponenteA =()=>{
    const [user,setUser]=useState("Giovanna")

        return(
            <div>
                <h2>Componente A</h2>
                <UserContext.Provider value={{user,setUser}}>
                    <ComponenteB/>
                </UserContext.Provider>
            </div>
        )
}

export default ComponenteA