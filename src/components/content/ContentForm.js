import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ContentForm = () => {
  // TODO: Provide initial state for profile
  const navigate = useNavigate();
  const { contentId } = useParams();
  const [content, setContent] = useState({
    likes: "",
    externalLink: "",
    contentType: "",
    title: "",
    description: "",
    staffId: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8088/contents/${contentId}`)
      .then((data) => data.json())
      .then((contentFromAPI) => setContent(contentFromAPI));
  }, []);

  // TODO: Get employee profile info from API and update state

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    return fetch(`http://localhost:8088/contents/${contentId}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }).then(navigate(`/exhibits`));
  };

  return (
    <form className="profile">
      <h2 className="profile__title">Edit Exhibit Details</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            value={content.title}
            onChange={(event) => {
              const contentCopy = { ...content };
              contentCopy.title = event.target.value;
              setContent(contentCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            cols="33"
            className="form-control"
            value={content.description}
            onChange={(event) => {
              const contentCopy = { ...content };
              contentCopy.description = event.target.value;
              setContent(contentCopy);
            }}
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="contentType">Content Type:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            value={content.contentType}
            onChange={(event) => {
              const contentCopy = { ...content };
              contentCopy.contentType = event.target.value;
              setContent(contentCopy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            value={content.externalLink}
            onChange={(event) => {
              const contentCopy = { ...content };
              contentCopy.externalLink = event.target.value;
              setContent(contentCopy);
            }}
          />
          <img className="form-image" src={content.externalLink}></img>
        </div>
      </fieldset>
      <button onClick={handleSaveButtonClick} className="btn btn-primary">
        Save Changes
      </button>
    </form>
  );
};
