import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Hero from "./components/Hero"
import PlayCardGame from "./pages/PlayCardGame"
import Card from "./components/Card"

export const cards = [
  {
    id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a cursus diam, pretium placerat ligula. Vivamus varius sodales maximus. Maecenas.",
  },
  {
    id: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet libero imperdiet, facilisis eros eget, placerat eros. Sed non.",
    
  },
  {
    id: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet commodo mauris. Duis urna massa, congue eget tincidunt auctor.",
  },
]

function App() {

  return (
    <div >
      <Hero />
      <PlayCardGame />
    </div>
  )
}

export default App;
