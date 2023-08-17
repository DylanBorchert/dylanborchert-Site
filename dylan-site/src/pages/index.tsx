import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Particals from '../animated-components/DotParticals'
import contentProvider from '../modules/ContentProvider.js'
import Home from '../components/Home'


export default function HomePage({home_page}: any) {


  return (
    <div className="font-sans">
        <Particals/>
      <div className="">
        <Navbar/>   
        <div>
          <Home content={home_page[0]["data"]["attributes"] as any} />
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
