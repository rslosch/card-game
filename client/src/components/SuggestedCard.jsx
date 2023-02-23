import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

const SuggestedCard = () => {
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
      e.preventDefault()
      const response = await fetch('/suggested_cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
      })
        const data = await response.json()
        if(data.errors) {
          setErrors(() => data.errors)
        } 
        else {
          setContent(`Thanks for the suggestion\n I'll take a look at it soon`)
        } 
    }

    // useEffect to display current errors in content bc of async nature
    useEffect(() => {
      if (errors.length > 0) {
        const errorMessages = errors.join('\n')
        const formattedErrorMessages = errorMessages.replace(/Content/g, '')
        setContent(`Something went wrong :( \n\n${formattedErrorMessages}`)
      }
    }, [errors])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center relative bg-white dark:bg-black pb-4">
      <div class="flex flex-col items-center justify-start p-4 rounded-xl bg-white dark:bg-black shadow-md border-2 border-black dark:border-white h-96 w-72">
          <div class="flex items-center justify-center m-auto w-full h-full">
              <textarea 
                type="text"
                placeholder="Give it to me"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="text-black dark:text-white bg-white dark:bg-black text-center text-lg md:text-xl w-full h-full uppercase object-contain outline-none resize-none overflow-auto"
              />
          </div>
            <h1 className="text-xs md:text-sm font-serif dark:text-white">CARDS FOR INSANITY</h1>
            {content.length > 0 && (
              <motion.button
                type="button"
                className="text-black dark:text-white hover:text-primary-3 dark:hover:text-primary-3 text-[8px] p-2 absolute top-0 right-0"
                onClick={() => setContent("")}
              >
                CLEAR TEXT
              </motion.button>
              )  
            }
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.1, backgroundColor: ['hsl(38, 37, 57)','hsl(38, 93%, 77%)'], transition: { duration: 0.5 }}}
        onTap = {{ scale: 0.9 }} 
        className="bg-primary-3 dark:bg-white text-white dark:text-black border border-white dark:border-black w-32 py-2 px-4 rounded mt-2"
      >
        SUBMIT
      </motion.button>
    </form>
  )
}

export default SuggestedCard