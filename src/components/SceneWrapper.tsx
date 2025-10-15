'use client'
import dynamic from "next/dynamic"
import React from 'react'

const Scene = dynamic(() => import('../components/hero/Scene'),{
  ssr : false,
})

const SceneWrapper = () => {
  return (
    <div className="h-screen flex justify-center content-center">
        <Scene/>
    </div>
  )
}

export default SceneWrapper