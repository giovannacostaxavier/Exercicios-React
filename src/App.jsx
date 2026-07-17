import ComAviso from "./components/ComAviso"
import Mensagem from "./components/Mensagem"
const App= ()=> {
      
      const NovoComAviso = ComAviso(Mensagem)
   return(
     <div>
        <NovoComAviso bloqueado={false}/>

      
     </div>
   )
  
   }
  

export default App

