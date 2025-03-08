import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <>
        <ul className='flex items-center justify-end p-4 bg-pink-500 text-white font-semibold space-x-6'>
            <Link href="/" className='hover:text-gray-600 transition duration-300'><li>Home</li></Link>
            <Link href="/About" className='hover:text-gray-600 transition duration-300'><li>About</li></Link>
            <li>Service</li>
            <li>Contact</li>
        </ul>
    </>
  )
}

export default Navbar
