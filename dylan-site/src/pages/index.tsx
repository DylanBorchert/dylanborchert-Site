import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Particals from '../animated-components/DotParticals'
import commitData from '../modules/commitData.js'
import contentProvider from '../modules/ContentProvider.js'
import About from '../components/About'


export default function Home({commit_msg, home_page}: any) {


  return (
    <div className="font-sans">
        <Particals/>
      <div className="">
        <Navbar commit_msg={commit_msg}/>   
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
      commit_msg: await commitData.getCommitData(),
      home_page: await contentProvider.getHomePage(),
    }, // will be passed to the page component as props
  }
}
