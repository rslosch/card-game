import React, { useState, useEffect, useRef } from 'react'
import HeroCard from './HeroCard'

import { motion } from 'framer-motion'

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(200)
  const toRotate = [ "AGAINST", "FOR INSANITY"] 
  const period = 250 // Change this to increase/decrease the speed of the interval

  // Ref to make interval clearable within tick()
  const tickerRef = useRef(null)

  useEffect(() => {
    tickerRef.current = setInterval(() => {
      tick()
    }, delta)

    return () => { clearInterval(tickerRef.current) }
  }, [text, loopNum])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    //EXIT Interval if "FOR INSANITY" text is complete
    if (loopNum === toRotate.length - 1 && updatedText === fullText) {
      clearInterval(tickerRef.current)
      return
    // Decrease delta (increase speed of interval) during updating text to "FOR INSANITY"
    } else if(loopNum === toRotate.length - 1 && updatedText !== fullText) {
      setIsDeleting(false)
      setDelta(prevDelta => Math.max(prevDelta - Math.random() * 50, 20))
      return
    // Decrease delta (increase speed of interval) during deletion of "Humanity"
    } else if (isDeleting) {
       setDelta(prevDelta => prevDelta / 2)
    } 

    // Finished updating text to "HUMANITY"
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      // Set Delta to 1 second after "Humanity" text completes
      setDelta(period)
    // Finished deleting of "HUMANITY"
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(period / 3)
    } 
  }

  const titleVariant = {
    visible: {
      opacity: 1,
    },
    hidden: (period) => ({
      opacity: 0,
      transition: {
        delay: (period * 8) / 1000,
        ease: "easeInOut",
        duration: (period * 1) / 1000
      }
    }),
  }

  return (
    <div className='dark:bg-black pt-4'>
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <motion.div
          initial="visible"
          animate="hidden"
          variants={titleVariant}
          custom={period}
        >
          <h1 className='text-4xl md:text-6xl dark:text-white font-bold'> CARDS <span className='text-primary-2'>{text}</span></h1>
        </motion.div>
        <HeroCard id={1} description='I am not a card' period={period}/>
      </div>
    </div>
  )
}

export default Hero