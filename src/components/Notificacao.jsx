import { useState } from "react";

const Notificacao=()=>{
    const [notificacao,setNotificacao] = useState(5)
        return(
            <div>
                
                {notificacao > 0 && <p>Você tem novas notificações</p>}
                
            </div>

        )
}
export default Notificacao