import React, { useState, useContext, useEffect } from 'react'
import Card from '../Card'

import { CardsContext } from '../../context/cardsContext'
import { ScreenSizeContext } from '../../context/screenSizeContext'

import { motion, AnimatePresence, useAnimationControls } from "framer-motion"

import { GoArrowDown } from 'react-icons/go'

const HeroCard = ({ complete, period }) => {
  const { randomHeroCards, mainHeroCard } = useContext(CardsContext)
  const { isSmallScreen } = useContext(ScreenSizeContext)

  const [isVisible, setIsVisible] = useState(true)

  const controls = useAnimationControls()

  const totalAnimationTime = period * 10

  useEffect(() => {
    if(complete) {
      console.log('start timer')
      controls.start("visible")
      const timeoutId = setTimeout(() => {
        setIsVisible(false)
      }, totalAnimationTime)
      return () => clearTimeout(timeoutId)
    }
  }, [])

    const mainHeroCardVariant = {
        hidden: {
            opacity: 0,
            y: -window.innerHeight
        },
        visible: {
            opacity: 1,
            zIndex: 100,
            y: 0,
            scale: [2.5,0.6,1],
            rotate: [0,30,0],
            transition:{
                type: "spring",
                ease: "easeInOut",
                duration: 0.5,
                delayChildren: 0.5,
                staggerChildren: 0.1,
            },
        }
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
                bounce: 0.6,
                duration: 1.2,
                dampness: 1.2
            }
        }),
    }
  
  if (!complete || !randomHeroCards || !mainHeroCard) {
    return (
      <></>
    )
  } 
  else {  
    return (
      <>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: ((totalAnimationTime/period)+1.4), duration: 0.1, ease: 'easeInOut' }}
            className={`${isSmallScreen ? "top-28": "top-0"} uppercase absolute text-3xl md:text-6xl text-primary-2 dark:text-white font-bold`}
          >
            Play Below
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20, transition: { delay: ((totalAnimationTime/period)+1.4), duration: 0.5, repeat: Infinity, repeatType: 'mirror' } }}
            className={`${isSmallScreen ? "top-36": "top-12"} absolute text-6xl md:text-6xl text-primary-2 dark:text-white`}
          >
            <GoArrowDown />
          </motion.div>

          <motion.div
            key={mainHeroCard.id}
            variants={mainHeroCardVariant} 
            animate={controls}
            custom={period}
            className="h-48 w-36 md:h-96 md:w-72 relative"
          > 
          <motion.div 
            whileHover={{ 
              scale: 1.1,
            }}
            className='w-full h-full absolute z-[99]'
          >
            <Card id={mainHeroCard.id} content="Get ready to go insane" type={"HeroCard"}/>
          </motion.div>
          <AnimatePresence >
            {isVisible && (
            randomHeroCards.map((card, index) => (
              <motion.div 
                key={card.id} 
                id={card.id}
                variants={childrenHeroCardVariant}
                custom={childrenInfo[index]}
                exit={{ 
                  y: [null, 0, -window.innerHeight],
                  rotate: 360,
                  transition:{
                    rotate: { 
                      delay:1,
                      duration: 0.2, 
                      repeat: 5, 
                      repeatType: "loop" 
                    },
                    y: { duration: 1.5, times:[0.2,0.92,1] },
                  }
                }}
                whileHover={{ 
                  scale: [0.9, 1.1],
                  zIndex: 100
                }}
                className={`h-full w-full absolute top-0 left-0 z-${randomHeroCards.length-index}`}
              >
                <Card id={card.id} content={card.content} type={"HeroCard"}/>
              </motion.div>
            )))}
          </AnimatePresence>
        </motion.div>
      </>
    )
  }
}

export default HeroCard