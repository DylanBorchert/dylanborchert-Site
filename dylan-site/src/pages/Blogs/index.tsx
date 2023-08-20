import React, { use, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import commitData from '../../modules/commitData.js'
import contentProvider from '../../modules/ContentProvider.js'
import Project from '../../components/Projects'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Projects({ blog_page }: any) {

  function CMS_Handler() {
    if (blog_page == null) {
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
      return <Project content={blog_page[0].data.attributes as any} />
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
      blog_page: await contentProvider.getBlogPage(),
    }, // will be passed to the page component as props
  }
}
