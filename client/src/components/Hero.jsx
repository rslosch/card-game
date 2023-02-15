import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(200)
  const toRotate = [ "AGAINST", "FOR INSANITY"] 
  const period = 1000

  // Ref to make interval clearable within tick()
  const tickerRef = useRef(null)

  useEffect(() => {
    tickerRef.current = setInterval(() => {
      tick();
    }, delta);

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
      console.log('decreasing delta', delta)
      setDelta(prevDelta => Math.max(prevDelta - Math.random() * 60, 20))
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

  return (
    <div className='bg-black'>
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <h1 className='text-6xl text-white font-bold'> CARDS <span className='text-primary-4'>{text}</span></h1>
      </div>
    </div>
  )
}

export default Hero