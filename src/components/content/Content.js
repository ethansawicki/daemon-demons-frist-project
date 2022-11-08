export const Content = ({content}) => {

   const shorten = (text) => {
      return text.substring(0,100)
   }

   return (
      <div className="exhibit">
         <header>{content.title}</header>
         <img src={content.externalLink}></img>
         <p>Decription: {shorten(content.description)}</p>
         <p>Type of Exhibit: {content.contentType}</p>
      </div>
   )
}