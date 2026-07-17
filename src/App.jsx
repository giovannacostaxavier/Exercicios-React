import Mensagem from "./components/Mensagem"
import ComBorda from "./components/ComBorda"

const MensagemComBorda = ComBorda(Mensagem);

const App= ()=> {
      

   return(
     <div>
       <MensagemComBorda/>
     </div>
   )
  
   }
  

export default App

