'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { opacity } from './anim';
import Image from 'next/image';
import Icons from './nav/icons';
import Nav from './nav'

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
<nav className="w-full bg-primary flex  p-[10px] font-extrabold">       {/* need to check for box-sizing*/}
  <div className = "flex content-center uppercase text-[12px] font-extrabold relative">
    <Link href='/'>SIDDHANT</Link>
    <div onClick={()=>{setIsActive(!isActive)}} className='flex justify-center items-center gap-[8px] cursor-pointer'>
      <div className=''> {/* Burger css will come here */}
      <div>
         
      </div>
      </div>
    </div>
  </div>
</nav>

  );
}
