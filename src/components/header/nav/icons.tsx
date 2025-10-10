import React from 'react'
import Image from 'next/image';

interface ChildProps {
  isActive : boolean
}

const Icons = ({isActive }: ChildProps) => {
  return (
    <div
  className={`flex-1 flex justify-end gap-4 text-white duration-500 
  ${isActive ? "opacity-0 pointer-events-none transition-opacity" : "opacity-100 pointer-events-auto transition-opacity"}`}
>
        <a href='https://github.com/chokoskoder'>
          <Image
          className='rounded-full'
          src = "/github.gif"
          width = {25}
          height={25}
          unoptimized
          alt = "Logo"
          />
        </a>
<a href='https://github.com/chokoskoder'>
          <Image
          className='rounded-full'
          src = "/twitter.svg"
          width = {25}
          height={25}
          unoptimized
          alt = "Logo"
          />
        </a>

        <a href='https://github.com/chokoskoder'>
          <Image
          className='rounded-full'
          src = "/linkedin.svg"
          width = {25}
          height={25}
          unoptimized
          alt = "Logo"
          />
        </a>
</div>
  )
}
export default Icons