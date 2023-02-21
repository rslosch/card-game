import React, { useState, useContext } from 'react'
import Card from '../Card'

import { CardsContext } from '../../context/cardsContext'
import { ScreenSizeContext } from '../../context/screenSizeContext'

import { motion } from "framer-motion"

const HeroCard = ({ period }) => {
  const { randomHeroCards, mainHeroCard } = useContext(CardsContext)
  const { isSmallScreen } = useContext(ScreenSizeContext)


    const mainHeroCardVariant = {
        hidden: {
            opacity: 0,
            y: -window.innerHeight
        },
        visible: (period) => ({
            opacity: 1,
            zIndex: 100,
            y: 0,
            scale: [2.5,0.6,1],
            rotate: [0,5,15,30,20,0],
            transition:{
                type: "spring",
                ease: "easeInOut",
                delay: (period * 9) /1000,
                duration: (period * 0.5) /1000,
                delayChildren: (period * 10) /1000,
                staggerChildren: (period * 0.08) /1000,
            } 
        }),
    }

    //LOWEST Y VALUE IS -260 (TOP OF SCREEN)
    //HIGHEST Y VALUE IS 135 (BOTTOM OF SCREEN)
    //X VALUE +-240 (EDGE OF MAIN CARD) (+-220 for a bit of MainCard overlap)

    const childrenInfo = [
        {
          x: !isSmallScreen ? 140 + Math.floor(Math.random() * 40 - 20) : 80 + Math.floor(Math.random() * 20 - 10), 
          y: !isSmallScreen ? -240 + Math.floor(Math.random() * 40 - 20) : -200 + Math.floor(Math.random() * 40 - 20),
          rotate:  Math.round(Math.random() * 40 - 20),

        },
        {
          x: !isSmallScreen ? 400 + Math.floor(Math.random() * 80 - 40) : 110 + Math.floor(Math.random() * 20 - 10),
          y: !isSmallScreen ? -40 + Math.floor(Math.random() * 40 - 20) : -40 + Math.floor(Math.random() * 40 - 20),
          rotate:  Math.round(Math.random() * 40 - 20),
        },
        {
          x: !isSmallScreen ? 240 + Math.floor(Math.random() * 80 - 40) : 80 + Math.floor(Math.random() * 20 - 10),
          y: !isSmallScreen ? 120 + Math.floor(Math.random() * 40 - 20) : 140 + Math.floor(Math.random() * 40 - 20) ,
          rotate:  Math.round(Math.random() * 40 - 20),
        },
        {
          x: !isSmallScreen ? -240 + Math.floor(Math.random() * 80 - 40) : -80 + Math.floor(Math.random() * 20 - 10),
          y: !isSmallScreen ? 120 + Math.floor(Math.random() * 40 - 20) : 140 + Math.floor(Math.random() * 40 - 20),
          rotate:  Math.round(Math.random() * 40 - 20),
        },
        {
          x: !isSmallScreen ? -400 + Math.floor(Math.random() * 80 - 40) : -110 + Math.floor(Math.random() * 20 - 10),
          y: !isSmallScreen ? -40 + Math.floor(Math.random() * 40 - 20) : -40 + Math.floor(Math.random() * 40 - 20),
          rotate:  Math.round(Math.random() * 40 - 20),
        },
        {
          x: !isSmallScreen ? -140 + Math.floor(Math.random() * 40 - 20) : -80 + Math.floor(Math.random() * 20 - 10),
          y: !isSmallScreen ? -240 + Math.floor(Math.random() * 40 - 20) : -200 + Math.floor(Math.random() * 40 - 20),
          rotate:  Math.round(Math.random() * 40 - 20),
        },
    ]

    const childrenHeroCardVariant = {
        hidden: {
            opacity: 0,
            x: 0,
            y: 0
        },
        visible: (childrenInfo) => ({
            opacity: 1,
            x: childrenInfo.x,
            y: childrenInfo.y,
            rotate: childrenInfo.rotate,
            transition:{
                type: "spring",
                bounce: 0.7,
                duration: 1.2
            }
        })
    }
  
  if (!randomHeroCards || !mainHeroCard) {
    return (
      <></>
    )
  } 
  else {  
    return (
      <motion.div
          key={mainHeroCard.id}
          initial="hidden" 
          animate="visible"
          variants={mainHeroCardVariant} 
          custom={period}
          // className="h-48 w-36 md:h-96 md:w-72 relative"
          className="h-48 w-36 md:h-[360px] md:w-64 relative"

      > 
        <div className='w-full h-full absolute z-[99]'>
          <Card id={mainHeroCard.id} content={mainHeroCard.content} type={"HeroCard"}/>
        </div>
        {randomHeroCards.map((card, index) => (
        <motion.div 
            key={card.id} 
            id={card.id} 
            variants={childrenHeroCardVariant}
            custom={childrenInfo[index]}
            whileHover={{ 
              scale: [0.9, 1.1],
              rotate: [childrenInfo[index].rotate,0, childrenInfo[index].rotate],
              zIndex: 100
              // transition:{
              //   type: "spring",
              //   duration: 2,
              //   repeat: 1,
              //   repeatType: 'mirror',
              // }
            }}
            className={`h-full w-full absolute top-0 left-0 z-${randomHeroCards.length-index}`}
        >
          <Card id={card.id} content={card.content} type={"HeroCard"}/>
        </motion.div>
          ))}
      </motion.div>   
    )
  }
}

export default HeroCard