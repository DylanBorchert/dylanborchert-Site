import Navbar from "./Navbar.jsx";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import ContentProcessor from "./ContentProcessor.jsx";
import SocialsCard from "./SocialsCard";

function Home(props:any ) {

  const getTags = () => {
    //shuffle tags
    let contentTags = props.content.tags
    if (props.content.shuffle_tags) {
      let currentIndex = contentTags.length,  randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [contentTags[currentIndex], contentTags[randomIndex]] = [contentTags[randomIndex], contentTags[currentIndex]];
      }
    }
    return contentTags
  }

  return (
    <div className="about-gradient min-h-[100dvh]">
      <div className="text-white w-full">
        <div className="max-w-[1060px] mx-auto my-20 pl-5">
          <h1 className=" font-bold text-5xl my-2 ">
            {props.content.title}
          </h1>
          <SocialsCard />
          <div className="text-md">
            <Typewriter
              options={{
                strings: getTags(),
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