import React from 'react'
import Card from '../Card'
import { motion } from "framer-motion"

const GameCard = ({ id, content }) => {
  return (
    <motion.div
        key={id}
        initial={{ x: -window.innerWidth, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: [0,360] }}
        exit={{x: window.innerWidth, opacity: 0}}
        transition={{ duration: 0.3 }}
        className="h-96 w-72"
    > 
        <Card id={id} content={content} type="GameCard" />
    </motion.div>
)
}

export default GameCard