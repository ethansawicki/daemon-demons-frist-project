import { Link } from "react-router-dom"
import { ContentList } from "./ContentList"

export const Content = ({ content, users, fetchContent }) => {

   const shorten = (text) => {
      return text?.substring(0, 100)
   }
   const deleteButton = () => {
      if (!users?.isStaff) {
         return (
            <button
               onClick={() => {
                  fetch(`http://localhost:8088/content/${content.id}`, {
                     method: "DELETE",
                  }).then(fetchContent);
               }}
               className="content__delete"
            >
               DELETE
            </button>
         );
      } else {
         return "";
      }
   };

   return ( <>
      <div className="exhibit">
         <Link to={ `/exhibits/${content.id}`}><header>{content.title}</header></Link>
         <img src={content.externalLink}></img>
         <p>Decription: {content.description}</p>
         <p>Type of Exhibit: {content.contentType}</p>
         {deleteButton()}
      </div>
      </>
   )


}




