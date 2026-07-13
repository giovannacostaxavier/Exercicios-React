import Button from "./Button"
import { useContext } from "react"
import {ThemeContext} from "../App"



const Cabecalho =()=>{

    const {modo} = useContext(ThemeContext)
    return(
        <div>
            <p>{`O tema do site nesse momento é ${modo}`}</p>
            <Button />
        </div>
    )
}

export default Cabecalho