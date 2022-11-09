export const Content = ({ content, users, fetchContent }) => {

   const shorten = (text) => {
      return text.substring(0, 100)
   }
   const deleteButton = () => {
      if (!users.isStaff) {
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

   return (
      <div className="exhibit">
         <header>{content.title}</header>
         <img src={content.externalLink}></img>
         <p>Decription: {shorten(content.description)}</p>
         <p>Type of Exhibit: {content.contentType}</p>
         {deleteButton()}
      </div>
   )


}




