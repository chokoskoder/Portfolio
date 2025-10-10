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
<nav className="w-full bg-primary flex items-center p-[10px] font-extrabold">       {/* need to check for box-sizing*/}
  {/* LEFT - Logo */}
  <div className="flex-1 text-white text-xl">
    <Link href="/">SIDDHANT</Link>
  </div>

  {/* CENTER - Hamburger + Menu */}
  <div className="flex-1 flex justify-center">
    <button
      onClick={() => setIsActive(!isActive)}
      className="flex flex-col justify-between w-6 h-3.5 relative group cursor-pointer"
    >
      <span
        className={`block h-[2px] bg-white transition-transform duration-500 ${
          isActive ? 'rotate-45 translate-y-[6px]' : ''
        }`}
      ></span>
      <span
        className={`block h-[2px] bg-white transition-transform duration-500 ${
          isActive ? '-rotate-45 -translate-y-[6px]' : ''
        }`}
      ></span>
    </button>
  </div>

  {/* RIGHT - Icons */}
        <Icons isActive = {isActive} ></Icons>

        <AnimatePresence mode='wair'>
          {isActive && <Nav/>}
        </AnimatePresence>
</nav>

  );
}
