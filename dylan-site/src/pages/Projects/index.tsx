import React, { use, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import commitData from '../../modules/commitData.js'
import contentProvider from '../../modules/ContentProvider.js'
import Project from '../../components/Projects'

export default function Projects({commit_msg, project_page}: any) {

    return (
        <div className="">
            <Navbar commit_msg={commit_msg}/>   
            <Project content={project_page[0]["data"]["attributes"] as any} />
        </div>
    )
}

export async function getStaticProps() {

    return {
      props: {
        commit_msg: await commitData.getCommitData(),
        project_page: await contentProvider.getProjectPage(),
      }, // will be passed to the page component as props
    }
  }
