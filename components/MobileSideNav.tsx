"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function MobileSideNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen)

  // Close the menu when pressing the Escape key
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => e.key === "Escape" ? setIsOpen(false) : null
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    }
  }, [])

  // Prevent scrolling when the side screen is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
        <div className="block">
            <Button
                onClick={toggleMenu}
                variant="none"
                size="icon"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
            >
                <Menu className="h-6 w-6" />
            </Button>
        </div>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Side Screen */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-background shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col space-y-60">
            <div>
                <Button
                    onClick={() => setIsOpen(false)}
                    variant="none"
                    size="icon"
                    className="mb-4 w-full flex justify-end"
                    aria-label="Close menu"
                >
                    <X className="h-6 w-6 self-end" />
                </Button>
            </div>
            <div key="main-sections" className="flex flex-col gap-y-10 items-center ">
                <Link href="/" className={cn(
                    "font-semibold w-full h-10 flex items-center justify-center rounded-xl",
                    pathName === "/" && "bg-gradient text-primaryColor"
                )}>
                    Home
                </Link>
                <Link href="/about" className={cn(
                    "font-semibold w-full h-10 flex items-center justify-center rounded-xl",
                    pathName === "/about" && "bg-gradient  text-primaryColor"
                )}>
                    About Pixie
                </Link>
                <Link href="/contact-us" className={cn(
                    "font-semibold w-full h-10 flex items-center justify-center rounded-xl",
                    pathName === "/contact-us" && "bg-gradient  text-primaryColor"
                )}>
                    Contact Us
                </Link>
            </div>
            <div key="auth-section" className="flex flex-col gap-y-3 pt-16">
                {/* TODO: ADD CLERK SIGIN AND SIGN UP */}
                <Button variant="ghost" size="lg" className="font-semibold">
                    Login
                </Button>
                <Button className="font-semibold">
                    Get Started
                </Button>
            </div>
        </div>
      </div>
      </>
  )
}