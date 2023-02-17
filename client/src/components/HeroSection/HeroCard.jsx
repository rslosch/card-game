import React, { useState, useContext } from 'react'
import Card from '../Card'

import { CardsContext } from '../../context/cardsContext'

import { motion } from "framer-motion"

const cards = [
    {
      id: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a cursus diam, pretium placerat ligula. Vivamus varius sodales maximus. Maecenas.",
    },
    {
      id: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet libero imperdiet, facilisis eros eget, placerat eros. Sed non.",
      
    },
    {
      id: 3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet commodo mauris. Duis urna massa, congue eget tincidunt auctor.",
    },
    {
      id: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu orci, pharetra ut urna sed, euismod sagittis nunc. Nam tristique.",
    },
    {
      id: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra nulla non hendrerit rutrum. Nulla in pretium mi. Maecenas dictum.",
    },
    {
        id: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum a lorem eget lacinia. Nulla in neque fermentum elit sagittis.",
      }
]

const HeroCard = ({ period }) => {
  const { randomHeroCards, mainHeroCard } = useContext(CardsContext)


    const mainHeroCardVariant = {
        hidden: {
            opacity: 0,
            // zIndex: 100,
            y: -window.innerHeight
        },
        visible: (period) => ({
            opacity: 1,
            zIndex: 101,
            y: 0,
            scale: [3,2,1.5,1,0.6,1],
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
          x: 230,
          y: -280,
          rotate: -12,
        },
        {
          x: 300, 
          y: 0,
          rotate: 22,

        },
        {
          x: 350, 
          y: 200,
          rotate: 14,
        },
        {
          x: -150, 
          y: 220,
          rotate: -18,
        },
        {
          x: -400, 
          y: -50,
          rotate: -7,          
        },
        {
          x: -150,
          y: -200,
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

  return (
    <motion.div
        key={mainHeroCard.id}
        initial="hidden" 
        animate="visible"
        variants={mainHeroCardVariant} 
        custom={period}
        className="
        h-48 
        w-36 
        md:h-96 md:w-72 
        relative"
        // "z-50"
    > 
        <Card id={mainHeroCard.id} content={mainHeroCard.content}/>
       { randomHeroCards.map((card, index) => (
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
                className={`h-full w-full absolute top-0 left-0 z-${cards.length-index}`}
            >
                <Card id={card.id} content={card.content} type={"HeroCard"}/>
            </motion.div>
        ))}
    </motion.div>   
  )
       
    
}

export default HeroCard