import { React, useEffect, useState } from "react";
import GeometricGradient from "./animated-components/GeometricGradient.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Osciliator from "./animated-components/Osciliator.js";

function App() {
  let osciliator = true;

  useEffect(() => {
    //disable if on mobile
    if (window.innerWidth < 768) {
      Osciliator(osciliator);
      osciliator = true;
    } else {
      Osciliator(osciliator);
      osciliator = false;
    }
  }, []);

  
  return (
    <div className="w-[100%] h-[100vh] absolute top-0">
      <GeometricGradient />
      <canvas className="absolute left-0 -z-[1]" id="canvas"></canvas>
      {/* <canvas style="position: absolute;left:0;z-index: -1;" id="canvas" width="1078" height="1230"></canvas> */}
      <div className="flex flex-col justify-between min-h-full">
        <Navbar />
        <div className=" ">

        </div>

        
        <div></div>
      </div>
    </div>
  );
}

export default App;
