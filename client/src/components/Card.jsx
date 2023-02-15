import { useEffect } from "react"
import { motion } from "framer-motion"

const Card = ({ id, description, onNext }) => {

  return (
      <motion.div
        key={id}
        initial={{ x: -window.innerWidth, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: [0,180,360] }}
        exit={{x: window.innerWidth, opacity: 0}}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-md border-2 border-black p-4 h-3/5 w-80 md:w-96 lg:w-96 xl:w-96"
    >
        <div class="flex flex-col items-center justify-center p-4">
            <p className="text-gray-600 text-center text-2xl mt-2">{description.toUpperCase()}</p>
            <h1 className="text-lg font-medium mt-4 font-serif">CARDS FOR INSANITY</h1>
        </div>
    </motion.div>
  )
}

export default Card

