import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Comments } from "../comment/Comments"
import { Content } from "./Content"
import { LikeButton } from "./LikeButton"


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
            <>
               <Content likeBtn={<LikeButton />} content={exhibit} />
            </>
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