import React, { createContext, useState, useEffect } from 'react'

const CardsContext = React.createContext()

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/cards')
        const data = await response.json()
        setCards(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchCards()
  }, [])

  console.log("cards", cards)

  return (
    <CardsContext.Provider value={{cards, setCards}}>
      {children}
    </CardsContext.Provider>
  )
}

export {CardsProvider, CardsContext};
