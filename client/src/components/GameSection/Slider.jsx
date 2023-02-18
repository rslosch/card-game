import React, { useState } from 'react'

import { motion } from 'framer-motion'

const sliderVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Slider = () => {
    const [value, setValue] = useState(2)

    const handleChange = (event) => {
        setValue(event.target.value);
    }

  return (
    <motion.div
        layout
        variants={sliderVariants}
        initial="hidden"
        animate="visible" 
        className='flex flex-col justify-center items-center'
    >
        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {value} Players Selected
        </label>
        <input
            id="minmax-range"
            type="range"
            min="2"
            max="10"
            value={value}
            onChange={handleChange}
            className="w-80 h-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
    </motion.div>

  )
}

export default Slider