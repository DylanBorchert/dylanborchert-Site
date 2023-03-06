import { React, useEffect, useState } from "react";
import GeometricGradient from "./animated-components/GeometricGradient.jsx";
import Navbar from "./components/Navbar.jsx";
import VantaNet from "./animated-components/VantaNet.jsx";

function App() {
  
  return (
    <div className="w-[100%] h-[100vh]">
        <VantaNet styles={"fixed top-0"}/>
      <div className="flex flex-col justify-between min-h-[100vh]">
        <Navbar />
        <div></div>
        
      </div>
    </div>
  );
}

export default App;
