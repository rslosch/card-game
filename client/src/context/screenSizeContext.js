import React, { createContext, useState, useEffect } from 'react'

const ScreenSizeContext = React.createContext()


const ScreenSizeProvider = ({children}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

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
    <ScreenSizeContext.Provider value={{isSmallScreen}}>
      {children}
    </ScreenSizeContext.Provider> 
  )

}

export {ScreenSizeProvider, ScreenSizeContext}