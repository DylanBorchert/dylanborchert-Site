import {React, useState, useEffect, useMemo }from "react";
import FlipText from "../animated-components/FlipText.jsx";
import { Rotate as Hamburger } from 'hamburger-react'
import SlideText from "../animated-components/SlideText.jsx";
import NavigationMenu from "../components/NavigationMenu.jsx";
import classNames from "classnames";
import Link from 'next/link';

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
        <div className="z-40 bg-black">
        {isOpen ? <NavigationMenu commit_msg={props.commit_msg} isOpen={isOpen}/> : null}
            <div className="flex align-middle justify-between  z-20 max-w-[800px] mx-auto px-5 ">
                
                <div className="h-[2rem] leading-[48px] z-20 my-auto pt-1 ml-2">
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
                <div className="sm:flex flex-row justify-around z-20 hidden">
                    <Link href="/">
                        <span className="text-white h-[48px] leading-[48px] text-sm hover:text-primary-1 px-3">
                            About
                        </span>
                    </Link>
                    <Link href="/Projects">
                        <span className="text-white h-[48px] leading-[48px] text-sm hover:text-primary-1 px-3">
                            Projects
                        </span>
                    </Link>
                    <Link href="/Blogs">
                        <span className="text-white h-[48px] leading-[48px] text-sm hover:text-primary-1 px-3">
                            Blog
                        </span>
                    </Link>
                    <Link href="/NotFound">
                        <span className="text-white h-[48px] leading-[48px] text-sm hover:text-primary-1 px-3">
                            Contact
                        </span>
                    </Link>
                </div>
                <div className="h-[48px] leading-[48px] z-20 sm:hidden">
                    <Hamburger color={"#f1f1f1"} size={20} rounded toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>
        </div>
    )

}

export default Navbar;