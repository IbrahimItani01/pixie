import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileSideNav from './MobileSideNav'

const NavBar = () => {
  return (
    <nav className='shadow-xl h-[70px] flex justify-between items-center'>
        <div key="logo" className='flex items-center ml-2'>
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
          <h1 className='text-2xl font-semibold text-secondaryColor'>Pixie</h1>
        </div>
        <div key="DropDownMobile" className='mr-3'>
            <MobileSideNav/>
        </div>
    </nav>
  )
}

export default NavBar