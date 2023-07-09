import Navbar from "./Navbar.jsx";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect';
import ContentProcessor from "./ComponentsProcessor";
import SocialsCard from "@/strapi-components/SocialsCard.jsx";

function Home(props:any ) {

  return (
    <div className="about-gradient min-h-[100dvh]">
      <div className="text-white w-full">
        <div className="max-w-[800px] mx-auto my-20 pl-5">
          <h1 className=" font-bold text-5xl my-2 ">
            {props.content.title}
          </h1>
          <SocialsCard />
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
    </div>
  );
}

export default Home;