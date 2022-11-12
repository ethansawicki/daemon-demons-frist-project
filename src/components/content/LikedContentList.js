import { useEffect, useState } from "react"
import "./content.css"

export const LikedContentList = (fetchContent) => {
    const [likesWithPatrons, setLiked] = useState([])
    const [likedContent, updatedLikeContent] = useState([])

    const localDaemonUser = localStorage.getItem("daemon_user");
    const daemonUserObject = JSON.parse(localDaemonUser);



    useEffect (
        () => {
           const fetchLikes = async () => {
              const response = await fetch(`http://localhost:8088/likes?_expand=patrons&_expand=contents`)
              const likedArray = await response.json()
              setLiked(likedArray)
           }
           fetchLikes()
           .then(fetchContent)
        },
        []
     )

     useEffect(
        () => {
            const filteredLikes = likesWithPatrons?.filter(liked => liked.id === daemonUserObject.id)
            updatedLikeContent(filteredLikes)
        },
        [likesWithPatrons]
     )

     return <>
     {
        likedContent.map(
               (content) => {
                  return <>
                        <img src={content?.contents?.externalLink}></img>
                         <p>Decription: {content?.contents?.description}</p>
                         <p>Type of Exhibit: {content?.contents?.contentType}</p>
                         <p>Number of Likes: {content?.contents?.likes}</p>
                         </>
               }
            )
    }
     </>

}