import React, { use, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import commitData from '../../modules/commitData.js'
import contentProvider from '../../modules/ContentProvider.js'
import Project from '../../components/Projects'

export default function Projects({project_page}: any) {

    return (
        <div className="">
            <Navbar />   
            <Project content={project_page[0]["data"]["attributes"] as any} />
        </div>
    )
}

export async function getServerSideProps() {

    return {
      props: {
        project_page: await contentProvider.getProjectPage(),
      }, // will be passed to the page component as props
    }
  }
