import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Comments } from "../comment/Comments"
import { NewComment } from "../comment/NewComment"
import { Content } from "./Content"

export const ContentPage = () => {
   
   const {contentId} = useParams()
   const [exhibit, renderExhibit] = useState({})

   useEffect(
      () => {
         const fetchContent = async () => {
            const response = await fetch(`http://localhost:8088/contents/${contentId}`)
            const exhibitArray = await response.json()
            renderExhibit(exhibitArray)
         }
         fetchContent()
      },
      [contentId]
   )

   return <>
   <h1>{exhibit.title}</h1>
   <article className="contentList">
      <section>
         {
            <Content content={exhibit}></Content>
         }
      </section>
      <section>
         {
            <Comments />
         }
      </section>
   </article>
</>
}