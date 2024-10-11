"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { SignedIn, useAuth, UserButton } from "@clerk/nextjs"
import { Spinner } from "@nextui-org/spinner"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function MobileSideNav() {
  const pathName = usePathname();
  const { isSignedIn} = useAuth();
  const [Loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },500)
  })
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Image 
            src="/dropdown-icon.svg"
            width={20}
            height={20}
            alt="Dropdown"
          />
          <span className="sr-only">Open auth menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-3">
        <div className="flex flex-col gap-y-4">
          {isSignedIn && (
              <div className="flex items-center justify-center scale-110">
                {Loading?(
                  <Spinner size="sm" />
                ):(
                  <SignedIn>
                      <UserButton/>
                  </SignedIn>
                )}
              </div>
          )}
          <div className={cn(pathName==="/" && "bg-gradient text-white p-1 rounded-lg")}>
            <Link
              href="/"
              className="flex gap-x-1 items-center"
            >
              <Image
                src="/home-icon.svg"
                width={20}
                height={20}
                alt="Home Page"
              />
              <h2 className="">Home</h2>
            </Link>
          </div>
          <div className={cn(pathName==="/about-us" && "bg-gradient text-white p-1 rounded-lg")}>
            <Link
              href="/about-us"
              className="flex gap-x-1 items-center"
            >
            <Image
              src="/about-icon.svg"
              width={20}
              height={20}
              alt="Home Page"
            />
            <h2>About</h2>
            </Link>
          </div>
          <div className={cn(pathName==="/contact-us" && "bg-gradient text-white p-1 rounded-lg")}>
            <Link
              href="/contact-us"
              className="flex gap-x-1 items-center"
            >
            <Image
              src="/contact-icon.svg"
              width={20}
              height={20}
              alt="Home Page"
            />
            <h2>Contact Us</h2>
            </Link>
          </div>
          <DropdownMenuItem asChild>
            {!isSignedIn && (
              <Button variant="outline" className="w-full justify-center">
                <Link href="sign-up">
                  Get Started
                </Link>
              </Button>
            )}
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}