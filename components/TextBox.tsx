import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props ={
    content?: string,
    order: number,
}

const TextBox = ({content,order}:Props) => {
  return (
    <div className={cn(
        "rounded-xl p-4 my-4 text-white",
        order%2===0 && "bg-gradientFirst ml-[40%] mr-5",
        order%2!==0 && "bg-gradientSecond mr-[40%] ml-5",
        order === 3 && "mr-5"
    )}>
        <p>{content}</p>
        {order === 3 && (
            <div className='flex justify-around w-full'>
                <div className='flex flex-col gap-y-2 items-center'>
                    <Image
                        src="/dev-icon.svg"
                        alt='Developers'
                        width={30}
                        height={30}
                    />
                    <p>Code</p>
                </div>
                <div className='flex flex-col gap-y-2 items-center'>
                    <Image
                        src="/image-icon.svg"
                        alt='Images'
                        width={30}
                        height={30}
                    />
                    <p>Images</p>
                </div>
                <div className='flex flex-col gap-y-2 items-center'>
                    <Image
                        src="/chat-icon.svg"
                        alt='Chatting'
                        width={30}
                        height={30}
                    />
                    <p>Chatbot</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default TextBox