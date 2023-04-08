import React from 'react'
import VantaNet from '../animated-components/VantaNet'
import VantaBirds from '../animated-components/VantaBirds'
import Navbar from '../components/Navbar'


export default function Home({commit_msg}) {
  return (
    <div className="w-[100%] h-[100dvh]">
        <VantaNet styles={"fixed top-0 -z-10"}/>
      <div className="flex flex-col justify-between h-[100dvh]">
        <Navbar commit_msg={commit_msg}/>   
        <div className=" text-center font-semibold text-white"> 
            {/* <Typewriter
            options={{
                strings: ['Under Construction', 'Coming Soon', 'Check Back Later'],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 80,
            }}
            /> */}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/repos/dborc610/dylanborchert-Site/commits`);
  const data = await response.json();

  const commitSha = data[0]?.sha;
  const commitMessage = data[0]?.commit.message;
  let commitTime = data[0].commit.committer.date
      .replace("T", " at ")
      .replace("Z", " ");

  let splittedTime = commitTime.split(" at ");
  let time = splittedTime[1].split(":");
  let hour = parseInt(time[0]);
  time[0] = hour - 7 < 0 ? hour + 17 : hour - 7;
  time = time.join(":");
  splittedTime[1] = time;
  commitTime = splittedTime.join(" at ");
  
  return {
      props: {
          commit_msg: [ commitSha, commitTime, commitMessage ],
      }
  };
}
