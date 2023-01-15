import React from "react";
import GeometricGradient from './animated-components/GeometricGradient.js';
import LinkTree from "./components/LinkTree.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="w-[100%] h-[100vh] absolute top-0">
      <GeometricGradient />
      <div>
        <Navbar />
        <LinkTree />
      </div>
    </div>
  );
}

export default App;
