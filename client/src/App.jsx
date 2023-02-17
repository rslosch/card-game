import { useState, useEffect } from "react"

import { CardsProvider } from "./context/cardsContext"
import { ScreenSizeProvider } from "./context/screenSizeContext"

import Navbar from "./components/Navbar"
import Hero from "./components/HeroSection/Hero"
import PlayCardGame from "./components/GameSection/PlayCardGame"

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

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="overflow-hidden" >
      <CardsProvider>
      <ScreenSizeProvider>
        <Navbar onThemeSwitch={handleThemeSwitch} theme={theme}/>
        <Hero />
        <PlayCardGame />
      </ScreenSizeProvider>
      </CardsProvider>
    </div>
  )
}

export default App;
