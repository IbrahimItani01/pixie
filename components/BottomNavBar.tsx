'use client'

import Link from "next/link";

const BottomNavBar=()=> {
  return (
    <div className="text-3xl bg-gradient text-white px-4 py-2 mb-10 rounded-full border-b-4 border-b-gradientFirst active:border-b-0">
        <Link href="/pixie">
          Chat with Pixie
        </Link>
    
    </div>
  )
}
export default BottomNavBar;