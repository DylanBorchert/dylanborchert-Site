import { React, useEffect, useState } from "react";
import GeometricGradient from "./animated-components/GeometricGradient.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Osciliator from "./animated-components/Osciliator.js";
import VantaNet from "./animated-components/VantaNet.js";
import HamMenu from "./components/HamMenu.js";

function App() {
  let osciliator = true;

  useEffect(() => {
    //disable if on mobile
    // if (window.innerWidth < 768) {
    //   Osciliator(osciliator);
    //   osciliator = true;
    // } else {
    //   Osciliator(osciliator);
    //   osciliator = false;
    // }
  }, []);

  
  return (
    <div className="w-[100%] h-[100vh] absolute top-0">
      <GeometricGradient />
      {/* <canvas className="absolute left-0 -z-[1] top-0 h-full w-[50%]" id="canvas"></canvas> */}
      <VantaNet styles={"absolute"}/>
      <div className="flex flex-col justify-between min-h-[100vh]">
        <Navbar />
        <div></div>
        
      </div>
    </div>
  );
}

export default App;
