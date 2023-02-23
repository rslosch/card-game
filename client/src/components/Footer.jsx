import React from 'react'
import { FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="uppercase text-sm mr-2">© 2023 Cards for Insanity. All rights undeserved.</p>
        <div className="flex items-center">
          <FaTwitter className="text-white mr-2" />
          <p className="uppercase text-sm">Follow us on Twitter?</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
