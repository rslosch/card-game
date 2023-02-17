import React, { useState, useEffect, useContext } from "react"
import { ScreenSizeContext } from "../context/screenSizeContext"

const Card = ({ content, type }) => {

  const { isSmallScreen } = useContext(ScreenSizeContext)
  
  return (
        <div class="flex flex-col items-center justify-start p-4 rounded-xl h-full bg-white dark:bg-black shadow-md border-2 border-black dark:border-white ">
            <div class="flex items-center justify-center m-auto overflow-auto">
                <p className={`text-black dark:text-white text-center ${type === "HeroCard" && isSmallScreen ? "text-[8px]" : "text-lg"} md:text-xl uppercase object-contain`}>{content}</p>
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

