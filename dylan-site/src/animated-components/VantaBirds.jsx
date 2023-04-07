import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import * as THREE from 'three'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaBirds = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0x0,
        color2: 0x63de00,
        colorMode: "lerp",
        birdSize: 1.80,
        wingSpan: 20.00,
        separation: 100.00,
        alignment: 50.00,
        cohesion: 100.00,
        quantity: 1.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className={" absolute w-full h-[100%] -z-10"} ref={myRef}>
    
  </div>
}


export default VantaBirds;