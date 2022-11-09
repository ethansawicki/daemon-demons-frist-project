import { useEffect, useState } from "react"
import { Content } from "./Content"
import "./content.css"

export const ContentList = () => {
   const [contents, updateContent] = useState([])

   const localDaemonUser = localStorage.getItem("daemon_user");
   const daemonUserObject = JSON.parse(localDaemonUser);

   useEffect(
      () => {
         const fetchContent = async () => {
            const response = await fetch(`http://localhost:8088/content`)
            const contentArray = await response.json()
            updateContent(contentArray)
         }
         fetchContent()
      },
      []
   )



   return <>

      <h1>Current Exhibits and Shows</h1>
      <article className="contentList">
         {
            contents.map(
               (content) => {
                  return <Content content={content} key={`content--${content.id}`} users={daemonUserObject}/>
               }
            )
         }

      </article>
   </>

}