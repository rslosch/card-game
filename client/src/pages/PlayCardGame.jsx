import React from 'react'
import Card from '../components/Card'
import { cards } from '../App'

import { useState } from "react"
import { AnimatePresence } from "framer-motion"

const PlayCardGame = () => {
    const [currentCard, setCurrentCard] = useState(0)

    const handleNext = () => {
      setCurrentCard((prevCard) => prevCard + 1)
      if(currentCard === cards.length - 1) setCurrentCard(0)
    }
  
    const currentCardIndex = cards.findIndex((card) => card.id === currentCard + 1);
  
    return (
      <div className="flex flex-col justify-center items-center w-screen bg-gradient-to-r from-teal-500 to-blue-500 p-4">
      <AnimatePresence>
      {currentCardIndex !== -1 && (
        <Card
          key={cards[currentCardIndex].id}
          description={cards[currentCardIndex].description}
          onNext={handleNext}
        />
      )}
      </AnimatePresence>
        <button onClick={handleNext} className="bg-primary-1 text-white py-2 px-4 rounded mt-4">
            Next
        </button>
    </div>
    )
}

export default PlayCardGame