import React from "react";

import SlideText from "../animated-components/SlideText.js";

const Navbar = (props) => {


    return (
        <div className="top-0 h-[50px] p-[10px]">
            <div>
                <SlideText 
                    text1={
                    <div className="text-primary-1">
                        dylanborchert.ca
                    </div>} 
                    text2={
                    <div className="text-white">
                        dylanborchert.ca
                    </div>
                    }
                />
            </div>
            <div></div>
        </div>
    )

}

export default Navbar;