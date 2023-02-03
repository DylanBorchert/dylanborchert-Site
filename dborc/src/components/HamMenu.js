import {React, useState }from "react"; 
import SlideTextLarge from "../animated-components/SlideTextLarge.js";

const HamMenu = (props) => {

    return(
        <div className="absolute mt-20 h-[50vh] debug">
            <div>

            </div>
            <div className="h-[6rem]">
                <SlideTextLarge
                    text1={
                    <div className="text-white text-[4rem]">
                        Projects
                    </div>} 
                    text2={
                    <div className="text-[4rem] text-transparent font-outline-primary-2">
                        Projects
                    </div>
                    }
                />
            </div>
            <div className="h-[6rem]">
                <SlideTextLarge
                    text1={
                    <div className="text-white text-[4rem]">
                        About
                    </div>} 
                    text2={
                    <div className="text-[4rem] text-transparent font-outline-primary-2">
                        About
                    </div>
                    }
                />
            </div>
            <div className="h-[6rem]">
                <SlideTextLarge
                    text1={
                    <div className="text-white text-[4rem]">
                        Blog
                    </div>} 
                    text2={
                    <div className="text-[4rem] text-transparent font-outline-primary-2">
                        Blog
                    </div>
                    }
                />
            </div>
        </div>
    )
}

export default HamMenu