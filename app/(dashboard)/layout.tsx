import BottomNavBar from '@/components/BottomNavBar'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-screen'>
        <nav className='shadow-2xl h-[8%] flex justify-between items-center'>
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
            <div key="DropDownMobile" className='mr-4 flex items-center scale-125'>
            <SignedIn>
                <UserButton/>
            </SignedIn>
            </div>
        </nav>
        <div className='h-[84%]'>
            {children}
        </div>
        <div className='shadow-2xl h-[8%] flex justify-between items-center'>
            <BottomNavBar/>
        </div>
    </div>
  )
}

export default DashboardLayout