import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";



function App() { 

  const [IsGameStarted, setIsGameStarted] = useState(true);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
   <>
   {IsGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}/>}
  
   </>
  )
}

export default App