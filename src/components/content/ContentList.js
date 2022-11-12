import { useEffect, useState } from "react"
import { Content } from "./Content"
import "./content.css"

export const ContentList = () => {
   const [contents, updateContent] = useState([])
   const [likesWithPatrons, setLiked] = useState([])
   const [likesOn, toggleLiked] = useState(false)

   const localDaemonUser = localStorage.getItem("daemon_user");
   const daemonUserObject = JSON.parse(localDaemonUser);

   useEffect(
      () => {
         const fetchLikes = async () => {
            const response = await fetch(`http://localhost:8088/likes?_expand=patrons&_expand=contents`)
            const likedArray = await response.json()
            setLiked(likedArray)
         }
         fetchLikes()
      },
      []
   )

   useEffect(
      () => {
         if (likesOn) {
            const filteredLikes = likesWithPatrons.filter(liked => liked.id === daemonUserObject.id)
            setLiked(filteredLikes)
         } else {
            setLiked(contents)
         }
      },
      [contents, likesOn]
   )

   const fetchContent = async () => {
      const response = await fetch(`http://localhost:8088/contents`)
      const contentArray = await response.json()
      updateContent(contentArray)
   } 
   fetchContent()

   useEffect(
      () => {
         fetchContent()
      },
      []
   )

   return <>
      <h1>Current Exhibits and Shows</h1>
      <article className="contentList">
         <button onClick={() => { likesOn ? toggleLiked(false) : toggleLiked(true) }}>Only Liked</button>
         {
            likesWithPatrons.map(
               (content) => {
                  return <Content content={content} key={`content--${content.id}`} users={daemonUserObject} />
               }
            )
         }

      </article>
   </>

}