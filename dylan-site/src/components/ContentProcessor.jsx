import React, { useEffect } from 'react'
import Carousel from '../strapi-components/Carousel'
import Showcase from '../strapi-components/Showcase'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";



function ContentProcessor(props) {

  return (
    <div className='py-8'>
      <div className='w-full h-[50%] absolute -z-10'>
      </div>
      {props.content.map((item, index) => {
        switch (item["__component"]) {
          case 'general.highlight-projects':
          case 'general.highlight-blogs':
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-3 max-w-[1060px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                <Carousel content={item.blogs ? item.blogs.data : item.projects.data} type={item.blogs ? 'Blogs' : 'Projects'} />
              </div>
            )
          case 'general.markdown':
            return (
              <ReactMarkdown linkTarget="_blank" key={index} className="markdown max-w-[1060px] mx-auto px-5" remarkPlugins={[remarkGfm]}>
                {item["text"]}
              </ReactMarkdown>
            )
          case 'general.showcase-project':
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-3 max-w-[1060px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                <Showcase />
              </div>
            )
          default:
            console.warn("Unknown component type: " + item["__component"])
        }
      })
      }
    </div>
  )
}

export default ContentProcessor