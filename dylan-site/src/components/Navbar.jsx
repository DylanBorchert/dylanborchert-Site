import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useScrollDirection } from 'react-use-scroll-direction'
import FlipText from "../animated-components/FlipText.jsx";
import { Rotate as Hamburger } from 'hamburger-react'
import SlideText from "../animated-components/SlideText.jsx";
import NavigationMenu from "../components/NavigationMenu.jsx";
import classNames from "classnames";
import Link from 'next/link';

const Navbar = (props) => {

    const [isOpen, setOpen] = useState(false)
    const [scrollWidth, setScrollWidth] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    const { isScrollingUp, isScrollingDown } = useScrollDirection()


    function top() {
        const scrollOptions = {
            left: 0,
            top: 0,
            behavior: 'smooth'
        }
        window.scrollTo(scrollOptions);
    }

    const getScrollState = useMemo(() => {

        if (scrollY == 0) return "none";
        if (isScrollingUp) {
            return "up";
        } else if (isScrollingDown) {
            return "down";
        } else {
            return "none";
        }
    }, [scrollY])

    const updateScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, [scrollY]);


    useEffect(() => {
        let scrollbarWidth = window.innerWidth - document.body.clientWidth;
        if (scrollbarWidth > 0) setScrollWidth(scrollbarWidth);
        if (isOpen) {
            top();
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("scroll", updateScroll);

        console.log(getScrollState);


    }, [isOpen, getScrollState]);

    return (
        <>
            <div className={
                classNames("right-5 bottom-5 w-6 h-6 fixed z-20 transition duration-150 ease-in-out",
                    { "opacity-0 ": getScrollState == "none" },
                    { "opacity-100 hover:cursor-pointer": getScrollState == "up" },
                    { "opacity-100 hover:cursor-pointer": getScrollState == "down" }
                )
            } onClick={top}>
                <svg className="w-6 h-6 fill-primary-1 hover:fill-secondary-1"
                    viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m8 256c0-137 111-248 248-248s248 111 248 248-111 248-248 248-248-111-248-248zm143.6 28.9 72.4-75.5v182.6c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-182.6l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9l-132.6-132.7c-9.4-9.4-24.6-9.4-33.9 0l-132.8 132.7c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z" />
                </svg>
            </div>

            <div className="z-40 bg-black bottom-shadow-nav">
                {isOpen ? <NavigationMenu isOpen={isOpen} /> : null}
                <div className="flex align-middle justify-between  z-20 max-w-[1060px] mx-auto px-5">

                    <div className="h-[2rem] leading-[48px] z-20 my-auto pt-1 ml-2">
                        <Link href="/">
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
                        </Link>
                    </div>
                    <div className="sm:flex flex-row justify-around z-20 hidden">
                        <Link href="/">
                            <span className="text-white h-[48px] leading-[48px] text-sm hover:text-primary-1 px-3">
                                Home
                            </span>
                        </Link>
                        <Link href="/About">
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
                                Blogs
                            </span>
                        </Link>
                    </div>
                    <div className="h-[48px] leading-[48px] z-20 sm:hidden">
                        <Hamburger color={"#f1f1f1"} size={20} rounded toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar;