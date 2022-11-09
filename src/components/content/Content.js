import { Link } from "react-router-dom"
import { ContentList } from "./ContentList"

export const Content = ({content}) => {

   const shorten = (text) => {
      return text?.substring(0,100)
   }

   return ( <>
      <div className="exhibit">
         <Link to={ `/exhibits/${content.id}`}><header>{content.title}</header></Link>
         <img src={content.externalLink}></img>
         <p>Decription: {content.description}</p>
         <p>Type of Exhibit: {content.contentType}</p>
      </div>
      </>
   )
}