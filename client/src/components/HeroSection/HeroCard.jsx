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

    //Add conditional check if small screen or not
    const childrenInfo = [
        {
          x: isSmallScreen ? 80 : 230,
          y: isSmallScreen ? -190 : -280,
          rotate: -12,
        },
        {
          x: isSmallScreen ? 110 : 300, 
          y: isSmallScreen ? 0 : 0,
          rotate: 22,

        },
        {
          x: isSmallScreen ? 110: 350, 
          y: isSmallScreen ? 150: 200,
          rotate: 14,
        },
        {
          x: isSmallScreen ? -75 : -150, 
          y: isSmallScreen ? 160 : 220,
          rotate: -18,
        },
        {
          x: isSmallScreen ? -133 : -400, 
          y: isSmallScreen ? -35 : -50,
          rotate: -7,          
        },
        {
          x: isSmallScreen ? -75: -150,
          y: isSmallScreen ? -175 : -200,
          rotate: 5,
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
          className="h-48 w-36 md:h-96 md:w-72 z-[101] relative"
      > 
        <Card id={mainHeroCard.id} content={mainHeroCard.content} type={"HeroCard"} subtype={"Main"}/>
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