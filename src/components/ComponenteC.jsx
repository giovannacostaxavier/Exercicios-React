import {useContext} from "react"
import { UserContext } from "./ComponenteA"

const ComponenteC =()=>{

    const { user } = useContext(UserContext);

    return(
        <div>
            <h2>Componente C</h2>
            <p>{`Olá ${user}`}</p>
        </div>
    )
}

export default ComponenteC