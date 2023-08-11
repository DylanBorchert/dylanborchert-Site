import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Particals from '../animated-components/DotParticals'
import contentProvider from '../modules/ContentProvider.js'
import About from '../components/About'


export default function Home({home_page}: any) {


  return (
    <div className="font-sans">
        <Particals/>
      <div className="">
        <Navbar/>   
        <div>
          <About content={home_page[0]["data"]["attributes"] as any} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {

  return {
    props: {
      home_page: await contentProvider.getHomePage(),
    }, // will be passed to the page component as props
  }
}
