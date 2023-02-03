import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min.js'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaNet = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        showDots: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scaleMobile: 1.00,
        color: 0x121212,
        backgroundColor: 0x000000,
        backgroundAlpha: 0,
        points: 8.00,
        maxDistance: 24.00,
        spacing: 20.00,
        scale: 1.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className={"top-0 w-[100%] h-full -z-[1] " + props.styles} ref={myRef}>
    
  </div>
}


export default VantaNet;