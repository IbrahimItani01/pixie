import { cn } from '@/lib/utils'
import React from 'react'

type Props ={
    content: string,
    order: number,
}

const TextBox = ({content,order}:Props) => {
  return (
    <div className={cn(
        "",
        order%2===0 && "bg-gradientFirst",
        order%2!==0 && "bg-gradientSecond"
    )}>
        <p>{content}</p>
    </div>
  )
}

export default TextBox