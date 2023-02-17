import React, { useContext } from 'react'
import GameCard from './GameCard'

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
      <div className="flex flex-col justify-center items-center h-screen w-screen dark:bg-black">
        <AnimatePresence mode='wait'>
        {currentCardIndex !== -1 && (
            <GameCard
              key={cards[currentCardIndex].id}
              content={cards[currentCardIndex].content}
            />
        )}
        </AnimatePresence>
        <button onClick={handleNext} className="bg-black dark:bg-white text-white dark:text-black border border-white dark:border-black py-2 px-4 rounded mt-4">
            SHUFFLE
        </button>
    </div>
    )
}

export default PlayCardGame