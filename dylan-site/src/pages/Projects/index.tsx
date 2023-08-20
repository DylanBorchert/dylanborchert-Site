import React, { use, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import commitData from '../../modules/commitData.js'
import contentProvider from '../../modules/ContentProvider.js'
import Project from '../../components/Projects'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Projects({ project_page }: any) {

  function CMS_Handler() {
    if (project_page == null) {
      toast.error('Error Loading Content', {
        toastId: "error-loading-content",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return null
    } else {
      return <Project content={project_page[0]["data"]["attributes"] as any} />
    }
  }

  return (
    <div className="">
      <Navbar />
      {CMS_Handler()}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
