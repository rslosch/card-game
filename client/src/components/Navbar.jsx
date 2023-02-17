import React, { useState, useEffect, useContext } from 'react'
import { ScreenSizeContext } from '../context/screenSizeContext'
import { LightModeIcon, DarkModeIcon } from '../utils/icons'

const Navbar = ({onThemeSwitch, theme}) => {
    const [showHeader, setShowHeader] = useState(true)

    const {isSmallScreen} = useContext(ScreenSizeContext)

    useEffect(() => {
      const handleScroll = () => {
        setShowHeader(window.pageYOffset < 100 || window.pageYOffset > 600)
      };
  
      window.addEventListener("scroll", handleScroll)
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      };
    }, [])

  return (
    <div className={`fixed w-full ${
        showHeader ? "bg-transparent z-[101]" : "hidden"
      } transition-all duration-500 ease-in-out`}
    >
        <div className="container mx-auto px-4 z-50">
            <div className={`flex justify-between items-center py-4`}>
                    <div className="dark:text-white font-bold text-sm md:text-lg">CARDS FOR INSANITY</div>

                <div className="flex items-center">
                    <button className="dark:text-white hover:text-grey-8 text-sm mr-4">
                        ABOUT
                    </button>
                    <button className="dark:text-white hover:text-grey-8 text-sm mr-4">
                        PLAY
                    </button>
                    <button onClick={onThemeSwitch} className="dark:text-white hover:text-grey-8 text-sm">
                        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> }
                    </button>
                </div>
            </div>
        </div>
    </div>  
  )
}

// return (
// <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-black dark:border-black">
//   <div className="container flex flex-wrap items-center justify-between mx-auto">
//   <a className="flex items-center">
//       <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cards For Insanity</span>
//   </a>
//   <div className="flex md:order-2">
//       <button type="button" className="text-white bg-primary-3 hover:bg-primary-4 focus:ring-2 focus:outline-none focus:ring-primary-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-primary-2 dark:hover:bg-primary-3 dark:focus:ring-blue-800">CLICK TO PLAY</button>
//   </div>
//   <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul className="flex flex-col p-4 mt-4 border border-black rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black900 dark:border-black">
//       <li>
//         <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-black md:hover:bg-transparent md:hover:text-primary-3 md:p-0 md:dark:hover:text-white dark:text-black dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-black">About</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-black md:hover:bg-transparent md:hover:text-primary-3 md:p-0 md:dark:hover:text-white dark:text-black dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-black">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>
// )

export default Navbar