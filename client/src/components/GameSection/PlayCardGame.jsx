import React, { useContext } from 'react'
import GameCard from './GameCard'
import Slider from './Slider'

import { CardsContext } from '../../context/cardsContext'

// import { cards } from '../../App'

import { useState } from "react"
import { AnimatePresence } from "framer-motion"

const PlayCardGame = () => {
    const [currentCard, setCurrentCard] = useState(0)

    const { cards } = useContext(CardsContext)

    const handleNext = () => {
      setCurrentCard((prevCard) => prevCard + 1)
      if(currentCard === cards.length - 1) setCurrentCard(0)
    }
  
    const currentCardIndex = cards.findIndex((card,index) => index === currentCard)
  
    return (
      <div className="flex flex-col justify-center items-center h-full w-full md:h-screen md:w-screen dark:bg-black">
        <AnimatePresence mode='wait'>
        {currentCardIndex !== -1 && (
            <GameCard
              key={cards[currentCardIndex].id}
              content={cards[currentCardIndex].content}
            />
        )}
        </AnimatePresence>
        <div className='flex flex-col justify-center items-center py-2 w-1/2'>
          <button onClick={handleNext} className="bg-black dark:bg-white text-white dark:text-black border border-white dark:border-black w-32 py-2 px-4 rounded my-4">
              SHUFFLE
          </button>
          <Slider />
        </div>
    </div>
    )
}

export default PlayCardGame