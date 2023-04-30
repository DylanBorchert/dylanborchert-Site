import React, { useEffect } from 'react'
import DynamicText from '../strapi-components/DynamicText.jsx'
import Carousel from '../strapi-components/Carousel.tsx'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function ContentProcessor(props) {


  return (
    <>
      <h1 className="font-bold text-xl my-1 max-w-[800px] mx-auto ">
        My Projects
      </h1>
      <Carousel />
      <h1 className="font-bold text-xl my-1 max-w-[800px] mx-auto">
        Blog Posts
      </h1>
      <Carousel />
      <ReactMarkdown className="markdown max-w-[800px] mx-auto" remarkPlugins={[remarkGfm]}>
        {props.content[2]["Text"]}
      </ReactMarkdown>
    </>
  )
}

export default ContentProcessor