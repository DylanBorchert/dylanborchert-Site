import {React, useState, useEffect }from "react"; 
import SlideTextLarge from "../animated-components/SlideTextLarge.jsx";
import axios from "axios";
import Socials from "./Socials.jsx";
import ContactCard from "./ContactCard.jsx";

const HamMenu = (props) => {

    const [commit, setCommit] = useState({ sha: "", time: "" });

    useEffect(() => {
        axios
        .get(`https://api.github.com/repos/dborc610/dylanborchert-Site/commits`)
          .then((response) => {
            const commitSha = response.data[0]?.sha;
            const commitMessage = response.data[0]?.commit.message;
            let commitTime = response.data[0].commit.committer.date
              .replace("T", " at ")
              .replace("Z", " ");
    
            let splittedTime = commitTime.split(" at ");
            let time = splittedTime[1].split(":");
            let hour = parseInt(time[0]);
            time[0] = hour - 7 < 0 ? hour + 17 : hour - 7;
            time = time.join(":");
            splittedTime[1] = time;
            commitTime = splittedTime.join(" at ");
    
            setCommit({
              sha: commitSha,
              time: commitTime,
              message: commitMessage,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });

    return(
        <div className="absolute w-full z-10 bg-black flex flex-col align-middle justify-around h-[100dvh]">
            <div className="h-24 relative text-white">
            </div>
            <div className="w-full flex flex-row m-auto">
                <div className="flex-grow"></div>
                <div className="m-auto w-[500px] grid sm:grid-cols-2 grid-cols-1 mx-8">
                    <div className="mr-auto">
                       <SlideTextLarge
                            text1={
                            <div className=" text-white">
                                Projects
                            </div>} 
                            text2={
                            <div className="text-transparent font-outline-white">
                                Projects
                            </div>
                            }
                        />
                        <SlideTextLarge
                            text1={
                            <div className="text-white">
                                About
                            </div>} 
                            text2={
                            <div className="text-transparent font-outline-white">
                                About
                            </div>
                            }
                        />
                        <SlideTextLarge
                            text1={
                            <div className="text-white">
                                Blog
                            </div>} 
                            text2={
                            <div className="text-transparent font-outline-white">
                                Blog
                            </div>
                            }
                        /> 
                    </div>
                    <Socials />
                    <ContactCard />
                </div>
                <div className="flex-grow"></div>
            </div>
            <div className="text-white w-full px-8 pb-4 text-xs"> 
                <span className="float-right hidden sm:block">
                    Last updated on {commit.time} [
                    <a
                        href={`https://github.com/dborc610/dylanborchert-Site/commit/${commit.sha}`}
                        target="_blank"
                        rel="noreferrer"
                        title={commit.message}
                    >
                    commit {commit.sha.split(" ")[0].substring(0, 7)}
                    </a>
                    ]
                </span>
                <b>Dylan Borchert</b> © {new Date().getFullYear()}.
            </div>
        </div>
    )
}

export default HamMenu