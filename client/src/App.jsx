import { useState, useEffect, useContext } from "react"
import { ScreenSizeContext } from "./context/screenSizeContext"

import { CardsProvider } from "./context/cardsContext"
import { ScreenSizeProvider } from "./context/screenSizeContext"

import { Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Hero from "./components/HeroSection/Hero"
import PlayCardGame from "./components/GameSection/PlayCardGame"

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
      <Navbar onThemeSwitch={handleThemeSwitch} theme={theme} />
        <Routes>
          <Route path ='/signup' element={<Signup />}/>
          <Route path ='/login' element={<Login />}/>
          <Route path='/' element={<><Hero/><PlayCardGame/></>} />
          <Route path='play' element={<PlayCardGame />} />
        </Routes>
      </ScreenSizeProvider>
      </CardsProvider>
    </div>
  )
}

export default App
