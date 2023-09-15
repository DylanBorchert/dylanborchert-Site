import Navbar from "./Navbar.jsx";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import ContentProcessor from "./ContentProcessor.jsx";
import SocialsCard from "./SocialsCard.jsx";

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
    <div className="about-gradient min-h-[calc(100dvh-3rem)]">
      <div className="text-white w-full">
        <div className="max-w-[1060px] mx-auto pt-20 mb-12 pl-5">
          <p className="text-lg">
            {props.content.subTitle}
          </p>
          <h1 className=" font-bold text-4xl my-5 bg-clip-text text-transparent bg-gradient-to-r from-primary-1 to-white w-72">
            {props.content.title}
          </h1>
          <div className="absolute w-full h-full top-0 left-0 z-[-10] bg-gradient-radial from-primary-1/20 via-primary-1/5  to-primary-1/0">

          </div>
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