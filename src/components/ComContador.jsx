import { useState } from "react"

const ComContador =(Componente)=>{
    const NovoComp =()=>{
        const [views,setViews] = useState(1)
        return(
            <div>
                <Componente />
                <p>Visualizações: {views} </p>
            </div>
        )
    }
    return NovoComp
}
export default ComContador