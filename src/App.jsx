import Temperatura from "./components/Temperatura"

const App= ()=> {

   return(
     <div>
         <Temperatura>
          {(temperaturaDesejada)=> <p>{`${temperaturaDesejada}°C`}</p>}
         </Temperatura>
     </div>
   )
  
   }
  

export default App

