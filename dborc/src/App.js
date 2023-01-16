import { React, useEffect, useState } from "react";
import GeometricGradient from "./animated-components/GeometricGradient.js";
import Footer from "./components/Footer.js";
import LinkTree from "./components/LinkTree.js";
import Navbar from "./components/Navbar.js";
import Osciliator from "./animated-components/Osciliator.js";

function App() {
  const [osciliator, setOsciliator] = useState(true);

  useEffect(() => {
    

    //disable if on mobile
    if (window.innerWidth < 768) {
      setOsciliator(true);
      Osciliator(true);
    } else {
      setOsciliator(false);
      Osciliator(false);
    }
  }, []);

  
  return (
    <div className="w-[100%] h-[100vh] absolute top-0">
      <GeometricGradient />
      <canvas className="absolute left-0 -z-[1]" id="canvas"></canvas>
      {/* <canvas style="position: absolute;left:0;z-index: -1;" id="canvas" width="1078" height="1230"></canvas> */}
      <div className="flex flex-col justify-between min-h-full">
        <Navbar />
        <div className=" mix-blend-difference">
          <p className="text-8xl font-semibold text-white pb-4">Dylan Borchert</p>
          <p className="text-4xl font-semibold text-white">The biggest nerd you'll ever meet </p>

        </div>
        {/* <LinkTree /> */}
        <div></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
