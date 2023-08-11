import React, { use, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import commitData from '../../modules/commitData.js'
import contentProvider from '../../modules/ContentProvider.js'
import Project from '../../components/Projects'

export default function Projects({blog_page}: any) {

    return (
        <div className="">
            <Navbar />   
            <Project content={blog_page[0].data.attributes as any} />
        </div>
    )
}

export async function getServerSideProps() {

    return {
      props: {
        blog_page: await contentProvider.getBlogPage(),
      }, // will be passed to the page component as props
    }
  }
