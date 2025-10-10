"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Body from './Body'
// import Footer from './Footer'
// import Image from './Image'
import React from 'react'
import { height } from "./anim"

const links = [
    {
        title : "Home",
        href : '/',
        src : 'home.png'
    },
        {
        title : "About me",
        href : '/about',
        src : 'aboutme.png'
    },
        {
        title : "Projects",
        href : '/projects',
        src : 'projects.png'
    },
        {
        title : "Experience",
        href : '/experience',
        src : 'exp.png'
    },
        {
        title : "Contact",
        href : '/contact',
        src : 'contact.png'
    },

]


const Nav = () => {
    const [selectedLink , setSelectedLink] = useState({isActive : false , index : 0})

  return (
    <motion.div
    variants={height}
    initial="initial"
    animate="enter"
    exit="exit"
    className = "overflow-hidden">
        <div className="flex gap-[50px] mb-[80px] lg:justify-between lg:mb-0">
            <div className="flex flex-col justify-between">
                <Body links = {links} selectedLink = {selectedLink} setSelectedLink={setSelectedLink}/>
                {/* <Footer/> */}
            </div>
            {/* <Image src={links[selectedLink.index].src} selectedLink={selectedLink}/> */}
        </div>
    </motion.div>
  )
}

export default Nav