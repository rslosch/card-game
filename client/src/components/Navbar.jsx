import React, { useState, useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'

import { ScreenSizeContext } from '../context/screenSizeContext'

import { LightModeIcon, DarkModeIcon, MenuIcon, XIcon } from '../utils/icons'

import { UserContext } from '../context/userContext'

const Navbar = ({onThemeSwitch, theme}) => {
  const [showHeader, setShowHeader] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const { isSmallScreen } = useContext(ScreenSizeContext)
  const { user, logout } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if(!isSmallScreen) setShowHeader(window.pageYOffset < 100 || window.pageYOffset > 600)
      else setShowHeader(window.pageYOffset < 125 || (window.pageYOffset > 575 && window.pageYOffset < 775))
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLogout = () => {
    //delete session from backend
    const logoutPost = async () => {
      const response = await fetch('/logout', {
        method: 'DELETE'
      })
    }
    logoutPost()    

    logout()
    //make redirect to home page more fluid
    navigate('/')
  }

  const displayLoginOrLogout = (user) => {
    if(user) {
      return <motion.button key="logout" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} variants={linkVariants} onClick={handleLogout} className="text-black dark:text-white hover:text-grey-8 text-sm md:text-lg self-end"> LOGOUT</motion.button>
    } else {
      return <motion.button key="login" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} variants={linkVariants} onClick={() => navigate('/login')} className="text-black dark:text-white hover:text-grey-8 text-sm md:text-lg self-end"> LOGIN</motion.button>
    }
  }

  const iconVariants = {
    opened: {
      rotate: 0,
    },
    closed: {
      rotate: 135,
    }
  }

  const navVariants = {
    opened: {
      top: 0,
      transition: {
        duration: 0.25,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      top: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    }
  }

  const linkVariants = {
    opened: {
      opacity: 1,
      x: [-20, 0],
    },
    closed: {
      opacity: 0,
      y: 10,
    },
  }

  return (
    <div 
      className={`fixed w-full ${ showHeader ? "bg-transparent z-[101]" : "hidden"} transition-all duration-500 ease-in-out`}
    >
        <div className="container mx-auto px-4 z-50">
            <div className={`flex justify-between items-center py-4`}>
              
                <div className="dark:text-white font-bold text-sm md:text-lg">CARDS FOR INSANITY</div>
                {user && <div className="dark:text-white font-bold text-sm md:text-lg">Hello {user.email}</div>}

                <div className="flex items-end">
                  <motion.button
                    variants={iconVariants}
                    animate={showMenu ? "opened" : "closed"}
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.9}}
                    onClick={() => setShowMenu(!showMenu)}
                    className="dark:text-white hover:text-grey-8 text-sm mr-4"
                  >
                    <XIcon />
                  </motion.button>
                  <nav className="relative flex flex-col">
                    <motion.div
                      variants={navVariants}
                      initial={false}
                      animate={showMenu ? "opened" : "closed"}
                      exit="exit"
                      className="absolute top-2 right-5 flex flex-col md:w-48 "
                    >
                      <motion.button key="about" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} variants={linkVariants} className="text-black dark:text-white hover:text-grey-8 text-sm md:text-lg self-end">
                        ABOUT
                      </motion.button>
                      <motion.button key="play" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} variants={linkVariants} className="text-black dark:text-white hover:text-grey-8 text-sm md:text-lg self-end">
                        PLAY
                      </motion.button>
                      {displayLoginOrLogout(user)}
                      <motion.button key="icon" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} variants={linkVariants} onClick={onThemeSwitch} className="text-black dark:text-white hover:text-grey-8 text-sm self-end">
                        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> }
                      </motion.button>
                    </motion.div>
                  </nav>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Navbar