import React, { useState, useContext } from 'react'
import Card from '../Card'
import HeroCard from './HeroCard'

import { CardsContext } from '../../context/cardsContext'
import { ScreenSizeContext } from '../../context/screenSizeContext'

import { motion } from "framer-motion"

const HeroCardAnimation = ({ period }) => {
    const { randomHeroCards, mainHeroCard } = useContext(CardsContext)
    const { isSmallScreen } = useContext(ScreenSizeContext)

    const totalCards = randomHeroCards.length

    // const mainHeroCardVariant = {
    //     hidden: {
    //         opacity: 0,
    //         y: -window.innerHeight
    //     },
    //     visible: (period) => ({
    //         opacity: 1,
    //         zIndex: 100,
    //         transition: {
    //           type: "spring",
    //           ease: "easeInOut",
    //           delay: (period),
    //           duration: (3),
    //           delayChildren: (4) ,
    //           staggerChildren: (1),
    //       } 
    //     }),
    // }

    const parentVariant = {
        hidden: {
            opacity: 0,
            y: -window.innerHeight
        },
        visible: (period) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                when: "beforeChildren",
                delayChildren: 2,
                // staggerChildren: 1,
            }
        }),
    }

    if (!randomHeroCards || !mainHeroCard) {
        return (
          <></>
        )
      } 
    else {  
        return (
            // <motion.div
            //     key={mainHeroCard.id}
            //     initial="hidden" 
            //     animate="visible"
            //     variants={mainHeroCardVariant} 
            //     custom={period}
            //     className="h-48 w-36 md:h-[360px] md:w-64 relative"

            // > 
            // <div className='w-full h-full absolute z-[99]'>
            //     <Card id={mainHeroCard.id} content={mainHeroCard.content} type={"HeroCard"}/>
            // </div>
            // <motion.div 
            //     className='h-48 w-36 md:h-[360px] md:w-64 relative bg-black'
            //     initial="hidden"
            //     animate="visible"
            //     variants={parentVariant}
            //     custom={period}
            // >
                <div className='h-48 w-36 md:h-[360px] md:w-64 relative bg-black'>
                {randomHeroCards.map((card, index) => (
                    <HeroCard key={card.id} id={card.id} index={index} content={card.content} type={"HeroCard"} delay={index * 0.1} totalCards={totalCards}/>
                    ))}
                </div>
            // </motion.div>
        // </motion.div>   
        )
    }
}

export default HeroCardAnimation