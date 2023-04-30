import Navbar from "./Navbar.jsx";
import VantaNet from "../animated-components/VantaNet.jsx";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect';
import ContentProcessor from "./ComponentsProcessor.jsx"
import Carousel from "@/strapi-components/Carousel.tsx";

function Home(props) {

  useEffect(() => {
    console.log(props.content);
  }, []);

  return (
    <div className="">
      <div className="text-white w-full">
        <div className="max-w-[800px] mx-auto my-20">
          <h1 className=" font-bold text-5xl my-2 ">
            {props.content.name}
          </h1>
          <div className="text-md">
            <Typewriter
              options={{
                strings: props.content.tags,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 80,
              }}
            />
          </div>
        </div>
        <ContentProcessor content={props.content.content} />
        


      </div>
      <div></div>
    </div>
  );
}

export default Home;