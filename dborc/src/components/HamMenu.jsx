import {React, useState }from "react"; 
import SlideTextLarge from "../animated-components/SlideTextLarge.jsx";

const HamMenu = (props) => {

    return(
        <div className="h-full absolute w-full overflow-hidden">
            <div className="w-full h-full translate-x-[0%] bg-black flex flex-row ">
                <div className="flex-grow"></div>
                <div className="w-72 flex flex-col justify-center">
                        <SlideTextLarge
                            text1={
                            <div className="text-white">
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
                <div className="flex-grow"></div>
            </div>
        </div>
    )
}

export default HamMenu