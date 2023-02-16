import React from 'react'
import Card from '../Card'
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



const HeroCard = ({ id, description, period }) => {

    const mainHeroCardVariant = {
        hidden: {
            opacity: 0,
            y: window.innerHeight
        },
        visible: (period) => ({
            opacity: 1,
            y: 0,
            scale: [3,2,1.5,1,0.6,1],
            rotate: [0,5,15,30,20,0],
            transition:{
                type: "spring",
                // bounce: 0.7,
                ease: "easeInOut",
                delay: (period * 9) /1000,
                duration: (period * 0.5) /1000,
                delayChildren: (period * 11) /1000,
                staggerChildren: (period * 0.1) /1000,
            } 
        }),
    }

    const childrenHeroCardVariant = {
        hidden: {
            opacity: 0,
            x: 0,
            y: 0
        },
        visible: (index) => ({
            opacity: 1,
            x: 100 * (index+1),
            transition:{
                type: "spring",
                bounce: 0.7,
                // scale: [1.2,1.6,1.2,1],
            }


        })
    }

  return (
    <motion.div
        key={id}
        initial="hidden" 
        animate="visible"
        variants={mainHeroCardVariant} 
        custom={period}
        className="h-48 w-36 md:h-96 md:w-72 relative"
    > 
        <Card id={id} description={description}/>
       { cards.map((card, index) => (
            <motion.div 
                key={card.id} 
                id={card.id} 
                description={card.description} 
                variants={childrenHeroCardVariant}
                custom={index}
                className="h-full w-full absolute top-0 left-0"
            >
                <Card id={card.id} description={card.description} type={"HeroCard"}
/>
            </motion.div>
        ))}
    </motion.div>   
  )
       
    
}

export default HeroCard