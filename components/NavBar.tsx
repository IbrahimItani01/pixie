import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='shadow-xl h-[70px] flex'>
        <div className='flex items-center'>
          <Link
            href="/"
          >
            <Image
              src="/logo.svg"
              alt="Pixie Logo"
              width={50}
              height={50}
            />
          </Link>
          <h1 className='text-2xl font-semibold'>Pixie</h1>
        </div>
        <div></div>
    </nav>
  )
}

export default NavBar