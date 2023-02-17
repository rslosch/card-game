import React, { createContext, useState, useEffect } from 'react'

const CardsContext = React.createContext()

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [randomHeroCards, setRandomHeroCards] = useState([])
  const [mainHeroCard, setMainHeroCard] = useState()

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/cards')
        const data = await response.json()
        setCards(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCards()

    const fetchRandomHeroCards = async () => {
        try {
          const response = await fetch('/randomHeroCards')
          const data = await response.json()
          const popped = data.pop()
          setMainHeroCard(popped)
          setRandomHeroCards(data)
        } catch (error) {
          console.error(error)
        }
    }
      fetchRandomHeroCards()

  }, [])

  return (
    <CardsContext.Provider value={{cards, setCards, randomHeroCards, mainHeroCard}}>
      {children}
    </CardsContext.Provider>
  )
}

export {CardsProvider, CardsContext};
