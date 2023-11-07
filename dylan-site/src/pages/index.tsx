import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Particals from '../animated-components/DotParticals'
import contentProvider from '../modules/ContentProvider.js'
import Home from '../components/Home'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function HomePage({ home_page }: any) {


  function CMS_Handler() {
    if (home_page == null) {
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
      return <Home content={home_page[0]["data"]["attributes"] as any} />
    }
  }


  return (
    <>
      <div className="">
        <Particals />
        <div className="">
          <Navbar />
          <div>
            {CMS_Handler()}
          </div>
        </div>
      </div>
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


    </>

  )
}

export async function getServerSideProps() {

  return {
    props: {
      home_page: await contentProvider.getHomePage(),
    }, // will be passed to the page component as props
  }
}
