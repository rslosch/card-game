import React, { useState, useEffect } from "react";

const Card = ({ id, description, type }) => {

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
        <div class="flex flex-col items-center justify-start p-4 rounded-xl h-full bg-white dark:bg-black shadow-md border-2 border-black dark:border-white ">
            <div class="flex items-center justify-center m-auto overflow-auto">
                <p className={`text-black dark:text-white text-center ${type === "HeroCard" && isSmallScreen ? "text-xs" : "text-lg"} md:text-xl uppercase object-contain`}>{description}</p>
            </div>
            {isSmallScreen && type === "HeroCard" ? (
                <></>
            ) : (
                <div>
                    <h1 className="text-xs md:text-sm font-serif dark:text-white">CARDS FOR INSANITY</h1>
                </div>
            )}
           
        </div>
  )
}

export default Card

