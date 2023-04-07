import React from 'react'
import VantaNet from '../animated-components/VantaNet'
import VantaBirds from '../animated-components/VantaBirds'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className="w-[100%] h-[100dvh]">
        <VantaNet styles={"fixed top-0 -z-10"}/>
      <div className="flex flex-col justify-between h-[100dvh]">
        <Navbar />   
        <div className=" text-center font-semibold text-white"> 
            {/* <Typewriter
            options={{
                strings: ['Under Construction', 'Coming Soon', 'Check Back Later'],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 80,
            }}
            /> */}
        </div>
        <div></div>
      </div>
    </div>
  )
}
