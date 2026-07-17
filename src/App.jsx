import Interrupitor from "./components/Interrupitor"

const App= ()=> {

   return(
     <div>
        <Interrupitor>
            {(valorInterrupitor)=><p style={{ backgroundColor: valorInterrupitor ? "white" : "black" }}>
              {valorInterrupitor ? "Ligado" : "Desligado"}</p>}
        </Interrupitor>
     </div>
   )
  
   }
  

export default App

