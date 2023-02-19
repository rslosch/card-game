import { useState, useEffect } from "react";

const Slider = ({value, setValue}) => {
  const min = 2
  const max = 10
  const [lastKeyCode, setLastKeyCode] = useState(null)
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'ArrowLeft') {
        if (value === min) return
        setValue((prevValue) => Math.max(parseInt(prevValue, 10) - 1, 1))
        setLastKeyCode('ArrowLeft')
      } 
      else if (event.code === 'ArrowRight') {
        if (value < max) {
          if (lastKeyCode === 'ArrowLeft') {
            setValue((prevValue) => Math.min(parseInt(prevValue, 10) + 1, max))
          } else {
            setValue((prevValue) => Math.min(parseInt(prevValue, 10) + 1, max))
          }
          setLastKeyCode('ArrowRight')
        }
      }
    }
  
    document.addEventListener('keydown', handleKeyDown)
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [value, lastKeyCode])

  return (
      <div className="flex flex-col w-96 bg-white dark:bg-black rounded-lg px-6 py-4">
        <div className="flex w-full justify-center">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-3"> {value} PLAYERS SELECTED </label>
        </div>
        <div className="mb-4 w-full">
          <div className="slider relative h-1 rounded-md bg-gray-300">
            <div
              className="progress absolute h-1 bg-green-300 rounded "
            ></div>
          </div>
          <div className="range-input relative">
            <input
              onChange={(e) => {setValue(e.target.value)}}
              type="range"
              min={min}
              max={max}
              step="1"
              value={value}
              className="range-min outline-none absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
            />
          </div>
        </div>
      </div>
  )
}

export default Slider