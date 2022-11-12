import { Link, useNavigate } from "react-router-dom";

export const Content = ({ content, users, fetchContent, likeBtn }) => {
   const navigate = useNavigate();
   // const shorten = (text) => {
   //    return text?.substring(0, 100);
   // };
   const deleteButton = () => {
      if (users?.staff) {
         return (
            <button
               onClick={() => {
                  fetch(`http://localhost:8088/contents/${content.id}`, {
                     method: "DELETE",
                  }).then(fetchContent);
               }}
               className="content__delete deleteButton"
            >
               DELETE
            </button>
         );
      } else {
         return "";
      }
   };

   const editButton = () => {
      if (users?.staff) {
        return (
          <div>
            <button
              className="content__edit"
              onClick={() => {
                navigate(`/exihibit/edit/${content.id}`);
              }}
            >
              EDIT
            </button>
          </div>
        );
      } else {
        return "";
      }
    };

   return (<>
      <div className="exhibit">
         <Link to={`/exhibits/${content.id}`}><header>{content.title}</header></Link>
         <img src={content.externalLink} alt="Frist images"></img>
         <p>Decription: {content.description}</p>
         <p>Type of Exhibit: {content.contentType}</p>
         <div>{likeBtn}</div>
         {deleteButton()}
         {editButton()}
      </div>
   </>
   )


}





