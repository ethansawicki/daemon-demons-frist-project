import { Link, useNavigate } from "react-router-dom";
import "./content.css";

export const Content = ({ content, users, fetchContent, likeBtn }) => {
  const navigate = useNavigate();
  // const shorten = (text) => {
  //    return text?.substring(0, 100);
  // };
  const deleteButton = () => {
    if (users?.staff) {
      return (
        <div>
          <button
            onClick={() => {
              fetch(`http://localhost:8088/contents/${content.id}`, {
                method: "DELETE",
              }).then(fetchContent);
            }}
            className="deleteButton"
          >
            DELETE
          </button>
        </div>
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

  return (
    <>
      <div className="exhibit">
        <Link className="exhibit__link" to={`/exhibits/${content.id}`}>
          <header className="exhibit__header">{content.title}</header>
        </Link>
        <img
          className="exhibit__image"
          src={content.externalLink}
          alt="Frist images"
        ></img>
        <p className="exhibit__description">{content.description}</p>
        <p className="exhibit__type">Type of Exhibit: {content.contentType}</p>
        <div>{likeBtn}</div>
        <div className="exhibit__button_container">
          {editButton()}
          {deleteButton()}
        </div>
      </div>
    </>
  );
};
