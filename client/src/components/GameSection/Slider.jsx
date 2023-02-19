import { useState, useEffect } from "react";

const Slider = () => {
  const [value, setValue] = useState(2)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'ArrowLeft') {
        setValue((prevValue) => Math.max(parseInt(prevValue, 10) - 1, 2))
      } else if (event.code === 'ArrowRight') {
        setValue((prevValue) => Math.min(parseInt(prevValue, 10) + 1, 10))
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
      <div className="flex flex-col w-96 bg-white rounded-lg px-6 py-4">
        <div className="flex w-full justify-center">
          <label className="block text-gray-700 text-sm font-bold mb-2"> {value} PLAYERS SELECTED </label>
        </div>
        <div className="mb-4">
          <div className="slider relative h-1 rounded-md bg-gray-300">
            <div
              className="progress absolute h-1 bg-green-300 rounded "
            ></div>
          </div>
          <div className="range-input relative  ">
            <input
              onChange={(e) => {setValue(e.target.value)}}
              type="range"
              min="2"
              max="10"
              step="1"
              value={value}
              className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
            />
          </div>
        </div>
      </div>
  )
}

export default Slider