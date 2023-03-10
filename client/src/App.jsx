import { useState, useEffect, useContext } from "react"
import { ScreenSizeContext } from "./context/screenSizeContext"

import { CardsProvider } from "./context/cardsContext"
import { ScreenSizeProvider } from "./context/screenSizeContext"
import { UserProvider } from "./context/userContext"

import { Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Hero from "./components/HeroSection/Hero"
import PlayCardGame from "./components/GameSection/PlayCardGame"
import PostSuggestedCards from "./components/PostSuggestedCards"
import Footer from "./components/Footer"

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
      <UserProvider>
        <Navbar onThemeSwitch={handleThemeSwitch} theme={theme} />
        <Routes>
          <Route path ='/signup' element={<Signup />}/>
          <Route path ='/login' element={<Login />}/>
          <Route path='/' element={<><Hero/><PlayCardGame/><PostSuggestedCards /></>} />
          <Route path='play' element={<PlayCardGame />} />
        </Routes>
        <Footer />
      </UserProvider>
      </ScreenSizeProvider>
      </CardsProvider>
    </div>
  )
}

export default App
