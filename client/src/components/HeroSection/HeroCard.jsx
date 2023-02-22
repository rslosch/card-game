import React, { useState, useContext } from 'react'
import Card from '../Card'

import { motion } from "framer-motion"

const HeroCard = ({ id, content, index, delay, totalCards }) => {

  const spreadAngle = 40 / (totalCards - 1)// adjust this value to change the spread angle
  const spreadStart = -spreadAngle * (totalCards - 1) / 2  
  const rotate = spreadStart + index * spreadAngle

  const xSpacing = 150 // adjust this value to change spacing between cards
  const xSpacing2 = xSpacing * 2

  const childrenInfo = Array.from({ length: totalCards }, (_, i) => ({
    x0: 0,
    x1: -xSpacing/2 + i * xSpacing/(totalCards - 1),
    x2: -xSpacing2/2 + i * xSpacing2/(totalCards - 1),
    y: Math.sin(rotate * Math.PI / 180), // Adding a multiplier here will increase the height of the fan
    delay: delay + i * 0.05,
    scale0: 1,
    scale1: 1.1,
    scale2: 1.3,
    scale3: 1,
  }))

  const childrenHeroCardVariant = {
    hidden: {
      opacity: 0,
      rotate: 360,
      x: 0,
      y: 0,
    },
    visible: (childrenInfo) => ({
      opacity: [1,1,1,1],
      scale: [childrenInfo.scale0, childrenInfo.scale1, childrenInfo.scale2, childrenInfo.scale3],
      rotate: [null,null,null,rotate],
      x: [childrenInfo.x0, childrenInfo.x1, childrenInfo.x1 * 1.2, childrenInfo.x2],
      y: [childrenInfo.y, childrenInfo.y+20,childrenInfo.y-10, childrenInfo.y ],
      transition: {
        times:[0.4,0.6,0.7,1], 
        duration: 2,
      },
    }),
    hover: {
      scale: 1.1,
      transition: { duration: 0.1 },
    }
  }
  return (  
    <motion.div 
        key={id} 
        id={id}
        variants={childrenHeroCardVariant}
        initial="hidden"
        animate="visible" 
        custom={childrenInfo[index]}
        whileHover="hover"
        className={`md:h-[360px] md:w-64 absolute z-${totalCards-index}`}
    >
      <Card id={id} content={content} type={"HeroCard"}/>
    </motion.div>
  )
}
    

export default HeroCard