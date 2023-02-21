import React, { useContext } from 'react'
import GameCard from './GameCard'
import Slider from './Slider'

import { CardsContext } from '../../context/cardsContext'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PlayCardGame = () => {
    const [currentCard, setCurrentCard] = useState(0)
    const [numberPlayers, setNumberPlayers] = useState(2)
    const [randomPlayer, setRandomPlayer] = useState(1)

    const { cards } = useContext(CardsContext)

    const handleNext = () => {
      setCurrentCard((prevCard) => prevCard + 1)
      if(currentCard === cards.length - 1) setCurrentCard(0)
      setRandomPlayer(() => getRandomPlayer(numberPlayers))
    }
  
    const currentCardIndex = cards.findIndex((card,index) => index === currentCard)

    function getRandomPlayer(numberPlayers) {
      return Math.floor(Math.random() * numberPlayers) + 1
    }
  
  return (
    <div className="flex flex-col justify-center items-center py-8 w-full md:h-screen md:w-screen dark:bg-black">
      <AnimatePresence mode='wait' >
      {currentCardIndex !== -1 && (
          <GameCard
            key={cards[currentCardIndex].id}
            content={cards[currentCardIndex].content}
          />
      )}
      </AnimatePresence>
      <div className='flex flex-col justify-center items-center py-2 w-1/2'>
        <p className="text-gray-700 dark:text-white text-sm font-bold">PLAYER <strong>{randomPlayer}</strong> STARTS </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: ['hsl(38, 37, 57)','hsl(38, 93%, 77%)'], transition: { duration: 0.5 }}}
          onTap = {{ scale: 0.9 }} 
          onClick={handleNext} 
          className="bg-primary-3 dark:bg-white text-white dark:text-black border border-white dark:border-black w-32 py-2 px-4 rounded"
          >
            SHUFFLE
        </motion.button>
        <Slider value={numberPlayers} setValue={setNumberPlayers} />
      </div>
  </div>
  )
}

export default PlayCardGame