import ComponenteC from "./ComponenteC"
import {useContext} from "react"
import { UserContext } from "./ComponenteA"


const ComponenteB =()=>{
    
    const {user} = useContext(UserContext);

    return(
        <div>
            <h2>Componente B</h2>
            <p>{`Olá ${user}`}</p>
            <ComponenteC />
        </div>
    )
}

export default ComponenteB