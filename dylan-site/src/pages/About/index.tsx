import ContactCard from "@/components/ContactCard";
import Navbar from "@/components/Navbar";
import SocialsCard from "@/components/SocialsCard";
import contentProvider from "@/modules/ContentProvider";
import ContentProcessor from "@/components/ContentProcessor";
import { useEffect } from "react";
import Link from 'next/link';


function About({about_page}:any ) {

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-[1060px] px-5 grid sm:grid-cols-[14rem_2fr] grid-cols-1 mt-8">
        <div className="m-auto rounded-full bg-black">
          <img src={`https://strapi.phantommedia.online${about_page[0].data.attributes.portrait.data.attributes.url}`} alt="" className="w-52 h-52 rounded-full"/>
        </div>
        <div className="flex flex-col justify-center p-5 h-full text-white m-auto sm:m-0">
          <p className="text-lg pt-3">
            Check my socials
          </p>
          <SocialsCard />
          <div className="flex sm:gap-5 sm:justify-start justify-between">
            <a href={`https://strapi.phantommedia.online${about_page[0].data.attributes.resume.data.attributes.url}`} target="_blank">
              <div className="p-2 outline outline-1 outline-white w-28 text-center rounded-lg text-sm mx-auto sm:mx-0 mt-2 hover:outline-primary-1 hover:text-primary-1  hover:font-semibold transition duration-400 ease-in-out">
                <p>My Resume</p>
              </div>
            </a>
            <Link href="/contact">
              <div className="p-2 outline outline-1 outline-white w-28 text-center rounded-lg text-sm mx-auto sm:mx-0 mt-2 hover:outline-primary-1 hover:text-primary-1  hover:font-semibold transition duration-400 ease-in-out">
                <p>Contact Me</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
      <div className="text-white w-full">
        <ContentProcessor content={about_page[0].data.attributes.content} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {

  return {
    props: {
      about_page: await contentProvider.getAboutPage(),
    }, // will be passed to the page component as props
  }
}

export default About;