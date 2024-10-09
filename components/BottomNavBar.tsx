'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BottomNavBar=()=> {
  const pages = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'ChatBot', href: '/text-generation' },
    { name: 'Images', href: '/image-generation' },
    { name: 'Code', href: '/code-generation' },
    { name: 'Contact', href: '/contact' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length)
  }

  return (
    <div className="w-full max-w-sm mx-auto mb-5">
      <Card className="relative rounded-full bg-gradient">
        <CardContent className=" flex items-center justify-center p-5">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-4" 
            onClick={goToPrevious}
            aria-label="Previous button"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Link href={pages[currentIndex].href} passHref>
            <Button variant="none" className="text-2xl text-white">
              {pages[currentIndex].name}
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4" 
            onClick={goToNext}
            aria-label="Next button"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
export default BottomNavBar;