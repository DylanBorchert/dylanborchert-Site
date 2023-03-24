import {React, useState }from "react";
import FlipText from "../animated-components/FlipText.jsx";
import { Rotate as Hamburger } from 'hamburger-react'
import SlideText from "../animated-components/SlideText.jsx";
import HamMenu from "./HamMenu.jsx";

const Navbar = (props) => {

    const [isOpen, setOpen] = useState(false)


    return (
        <>
        {isOpen ? <HamMenu /> : null}
        <div className="top-0 pt-8 pl-8 pr-8 flex align-middle justify-between">
            
            <div className="h-[2rem] z-10 my-auto">
                <SlideText 
                    text1={
                    <div className="text-white text-[1rem] tracking-tighter">
                        dylanborchert.ca
                    </div>
                    } 
                    text2={
                    <div className="text-primary-1 text-[1rem] tracking-tighter">
                        dylanborchert.ca
                    </div>
                    }
                />
            </div>
            <div className="z-20">
                <Hamburger color={"#f1f1f1"} size={25} rounded toggled={isOpen} toggle={setOpen}/>
            </div>
        </div>
        </>
    )

}

export default Navbar;