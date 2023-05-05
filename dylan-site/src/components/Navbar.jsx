import {React, useState }from "react";
import FlipText from "../animated-components/FlipText.jsx";
import { Rotate as Hamburger } from 'hamburger-react'
import SlideText from "../animated-components/SlideText.jsx";
import NavigationMenu from "../components/NavigationMenu.jsx";

const Navbar = (props) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="z-40">
        {isOpen ? <NavigationMenu commit_msg={props.commit_msg} /> : null}
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
                <div className="z-20">
                    <Hamburger color={"#f1f1f1"} size={25} rounded toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>
        </div>
    )

}

export default Navbar;