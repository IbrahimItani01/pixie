import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileSideNav from './MobileSideNav'

const NavBar = () => {
  return (
    <nav className='shadow-2xl h-[7.5%] flex justify-between items-center'>
        <div key="logo" className='flex items-center ml-2'>
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="Pixie Logo"
              width={50}
              height={50}
            />
            <h1 className='text-2xl font-semibold text-secondaryColor'>Pixie</h1>
          </Link>
        </div>
        <div key="DropDownMobile" className='mr-3'>
            <MobileSideNav/>
        </div>
    </nav>
  )
}

export default NavBar