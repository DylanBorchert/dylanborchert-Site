import {React, useState, useEffect }from "react"; 
import { GetServerSidePropsContext } from 'next';

import SlideTextLarge from "../animated-components/SlideTextLarge.jsx";
import axios from "axios";
import Socials from "./Socials.jsx";
import ContactCard from "./ContactCard.jsx";
import Link from 'next/link';


function NavigationMenu(props) {


    return(
        <div className="fixed w-full bg-black flex flex-col align-middle justify-around h-[100dvh] z-20 animate-fade-down-nav">
            <div className="h-24 relative text-white">
            </div>
            <div className="w-full flex flex-row m-auto">
                <div className="flex-grow"></div>
                <div className="m-auto w-[500px] grid sm:grid-cols-2 grid-cols-1 mx-8">
                    <div className="mr-auto">
                        <Link href="/NotFound">
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
                        </Link>
                        <Link href="/NotFound">
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
                        </Link>
                        <Link href="/NotFound">
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
                        </Link>
                    </div>
                    <Socials />
                    <ContactCard />
                </div>
                <div className="flex-grow"></div>
            </div>
            <div className="text-white w-full px-8 pb-4 text-xs"> 
                <span className="float-right hidden sm:block">
                    Last updated on {props.commit_msg[1]} [
                    <a
                        href={`https://github.com/dborc610/dylanborchert-Site/commit/${props.commit_msg[0]}`}
                        target="_blank"
                        rel="noreferrer"
                        title={props.commit_msg[2]}
                    >
                    commit {props.commit_msg[0].split(" ")[0].substring(0, 7)}
                    </a>
                    ]
                </span>
                <b>Dylan Borchert</b> © {new Date().getFullYear()}.
            </div>
        </div>
    )
}

export default NavigationMenu;