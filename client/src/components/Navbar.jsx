import React, { useState, useEffect } from 'react'
import { LightModeIcon, DarkModeIcon } from '../utils/icons'

const Navbar = ({onThemeSwitch, theme}) => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768)
      };
  
      window.addEventListener("resize", handleResize)
  
      // Call the handleResize function once to set the initial state
      handleResize()
  
      // Clean up the event listener when the component is unmounted
      return () => window.removeEventListener("resize", handleResize)
    }, [])

  return (
    <div className="fixed w-full bg-transparent z-10">
        <div className="container mx-auto px-4">
            <div className={`flex ${isSmallScreen ? "justify-end" : "justify-between"} items-center py-4`}>

                {isSmallScreen ? (
                    <></>
                ): (
                    <div className="dark:text-white font-bold text-lg">CARDS FOR INSANITY</div>
                )}

                <div className="flex items-center">
                    <button className="dark:text-white hover:text-grey-8 text-sm mr-4">
                        ABOUT
                    </button>
                    <button className="dark:text-white hover:text-grey-8 text-sm mr-4">
                        PLAY
                    </button>
                    <button onClick={onThemeSwitch} className="dark:text-white hover:text-grey-8 text-sm">
                        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> }
                    </button>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Navbar