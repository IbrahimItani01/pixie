"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {Spinner} from "@nextui-org/spinner";
const AuthLayout=({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
      setTimeout(()=>setIsLoading(false),500)
    },[])
    return (
      <>
        <div className='h-screen flex flex-col items-center justify-center gap-y-4'>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={80}
              height={80}
              alt="Pixie Logo"
            />
          </Link>
        {isLoading?(
            <Spinner
              color='current'
            />
        ):(
            <>
              {children}
            </>
        )}
        </div>
       </>
    );
  }

export default AuthLayout