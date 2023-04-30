import React, { useEffect } from 'react'
import DynamicText from '../strapi-components/DynamicText.jsx'
import Carousel from '../strapi-components/Carousel'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function ContentProcessor(props:any) {

  useEffect(() => {
    console.log(props.content)
  }, [])


  return (
    <>
      {props.content.map((item:any, index:number) => {
        switch (item["__component"]) {
          case 'general.highlight-projects':
          case 'general.highlight-blog-posts':
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-1 max-w-[800px] mx-auto">
                  {item["Title"]}
                </h1>
                <Carousel key={index} />
              </div>
            )
          case 'general.dynamic-text':
            return (
              <ReactMarkdown key={index} className="markdown max-w-[800px] mx-auto" remarkPlugins={[remarkGfm]}>
                {item["Text"]}
              </ReactMarkdown>
            )
          default:
            return <div className='max-w-[800px] mx-auto text-red-600' key={index}>Need to create {item["__component"]}</div>
        }
      })


      }

      {/* <h1 className="font-bold text-xl my-1 max-w-[800px] mx-auto ">
        My Projects
      </h1>
      <Carousel />
      <h1 className="font-bold text-xl my-1 max-w-[800px] mx-auto">
        Blog Posts
      </h1>
      <Carousel />
      <ReactMarkdown className="markdown max-w-[800px] mx-auto" remarkPlugins={[remarkGfm]}>
        {props.content[2]["Text"]}
      </ReactMarkdown> */}
    </>
  )
}

export default ContentProcessor