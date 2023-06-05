import React, { useEffect } from 'react'
import DynamicText from '../strapi-components/DynamicText.jsx'
import Carousel from '../strapi-components/Carousel'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SocialsCard from '../strapi-components/SocialsCard.jsx'


function ContentProcessor(props:any) {

  useEffect(() => {
    
  }, [])


  return (
    <div className='my-5'>
      {props.content.map((item:any, index:number) => {
        switch (item["__component"]) {
          case 'general.highlight-projects':
          case 'general.highlight-blogs':
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-1 max-w-[800px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                <Carousel content={item.blogposts ? item.blogposts.data : item.projects.data}/>
              </div>
            )
          case 'general.markdown':
            return (
              <ReactMarkdown key={index} className="markdown max-w-[800px] mx-auto px-5 my-5" remarkPlugins={[remarkGfm]}>
                {item["text"]} 
              </ReactMarkdown>
            )
          case 'general.socials':
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-1 max-w-[800px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                <SocialsCard key={index} content={item}/>
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