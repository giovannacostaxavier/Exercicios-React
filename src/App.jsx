import ThemeProvider from "./components/ThemeProvider"
import Header from "./components/Header"
import ThemeButton from "./components/ThemeButton"


const App= ()=> {

   return(
      <ThemeProvider>
         <Header />
         <ThemeButton />
      </ThemeProvider>
   )
  
   }
  

export default App

