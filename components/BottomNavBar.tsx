'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ButtonCarousel() {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
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
    <div className="w-full max-w-sm mx-auto">
      <Card className="relative">
        <CardContent className="flex items-center justify-center p-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-2" 
            onClick={goToPrevious}
            aria-label="Previous button"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Link href={pages[currentIndex].href} passHref>
            <Button variant="outline" className="w-48">
              {pages[currentIndex].name}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2" 
            onClick={goToNext}
            aria-label="Next button"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-4">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}