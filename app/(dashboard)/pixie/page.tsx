import { Chat } from '@/components/Chat'
import React from 'react'
import { generateUUID } from "@/lib/utils";

const TextGenerationPage = () => {
  const id = generateUUID();
  return (
    <div className='bg-gradient flex h-full items-center justify-center'>
        <Chat id={id} initialMessages={[]}/>
    </div>
  )
}

export default TextGenerationPage