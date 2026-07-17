import ComContador from "./components/ComContador"
import Mensagem from "./components/Mensagem"
const App= ()=> {
      
      const NovoComAviso = ComContador(Mensagem)
   return(
     <div>
        <NovoComAviso/>
     </div>
   )
  
   }
  

export default App

