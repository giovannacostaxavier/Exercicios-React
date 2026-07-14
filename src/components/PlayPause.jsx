import { useRef,useState } from "react";

const PlayPause=()=>{
    const refId = useRef(null)
    const[cont,setCont]=useState(0)

    const play =()=>{
        refId.current = setInterval(()=>{
            setCont(prevValue => prevValue +1)
        },2000 )
    }
    const pause =()=>{
        clearInterval(refId.current)
    }
    return(
        <div>
            <p>{cont}</p>
            <p>Play</p>
            <button onClick={play}>Play</button>

            <p>Pause</p>
            <button onClick={pause}>Pause</button>
        </div>
    )
}
export default PlayPause