import {React, useState, useEffect }from "react";
import FlipText from "../animated-components/FlipText.jsx";
import { Rotate as Hamburger } from 'hamburger-react'
import SlideText from "../animated-components/SlideText.jsx";
import NavigationMenu from "../components/NavigationMenu.jsx";
import classNames from "classnames";

const Navbar = (props) => {

    const [isOpen, setOpen] = useState(false)
    const [scrollWidth, setScrollWidth] = useState(0);

    function top(){
        const scrollOptions = {
            left: 0,
            top: 0,
            behavior: 'smooth'
        }
        window.scrollTo(scrollOptions);
    }

    useEffect(() => {
        let scrollbarWidth = window.innerWidth - document.body.clientWidth;
        if(scrollbarWidth > 0 ) setScrollWidth(scrollbarWidth);
        if(isOpen) {
            top();
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
     }, [isOpen]);

    return (
        <div className="z-40">
        {isOpen ? <NavigationMenu commit_msg={props.commit_msg} isOpen={isOpen}/> : null}
            <div className="pt-8 px-5 flex align-middle justify-between  z-20">
                
                <div className="h-[2rem] z-20 my-auto">
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
                <div className={classNames(
                    "z-20 transition-all duration-100",
                    isOpen ? `mr-[${scrollWidth}px]`: "mr-0",
                )}>
                    <Hamburger color={"#f1f1f1"} size={25} rounded toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>
        </div>
    )

}

export default Navbar;