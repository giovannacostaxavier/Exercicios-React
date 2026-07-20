import Botaocont from "./components/BotaoCont"
import MostrarContador from "./components/MostrarContador"
import ProvedorContador from "./components/ProvedorContador"

const App= ()=> {
      
      
   return(
     <div>
        <ProvedorContador>
            <MostrarContador/>
            <Botaocont/>
        </ProvedorContador>
     </div>
   )
  
   }
  

export default App

