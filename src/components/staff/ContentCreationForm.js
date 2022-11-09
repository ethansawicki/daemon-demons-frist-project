import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ContentCreationForm = () => {

const [content, update] = useState({
    likes: 0,
    externalLink: "",
    contentType: "",
    title: "",
    description: "",
    staffId: 0
})


const navigate = useNavigate()
const localFristUser = localStorage.getItem("daemon_user")
const fristUserObject = JSON.parse(localFristUser)


const submitContent = (event) => {
    event.preventDefault()

    const contentToSendToApi = {
        likes: content.likes,
        externalLink: content.externalLink,
        title: content.title,
        description:content.description,
        contentType: content.contentType,
        staffId: fristUserObject.id
    }


    const sendData = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contentToSendToApi)
        }
        const response = await fetch(`http://localhost:8088/content`, options)
        await response.json()
        navigate("/exhibits")
    }
    sendData()
}

    return (
        <form className="contentForm">
            <h2 className="contentForm__title">New Content</h2>
            <fieldset>
               <div className="form-group">
                <label htmlFor="Title">Title:</label>
                <input 
                    type="text"
                    placeholder="Enter Title here"
                    value ={content.title}
                    onChange={
                        (evt) => {
                            const copy = {...content}
                            copy.title = evt.target.value
                            update(copy)
                        }
                    }/>
                </div> 
            </fieldset>
            <fieldset>
               <div className="form-group">
                <label htmlFor="Description">Description:</label>
                <input 
                    type="text"
                    placeholder="Describe the artwork here"
                    value ={content.description}
                    onChange={
                        (evt) => {
                            const copy = {...content}
                            copy.description = evt.target.value
                            update(copy)
                        }
                    }/>
                </div> 
            </fieldset>
            <fieldset>
               <div className="form-group">
                <label htmlFor="link">Content-Link:</label>
                <input 
                    type="url"
                    placeholder="url of new content"
                    value ={content.externalLink}
                    onChange={
                        (evt) => {
                            const copy = {...content}
                            copy.externalLink = evt.target.value
                            update(copy)
                        }
                    }/>
                </div> 
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="content-Type">Content-Type:</label>
                <input
                    type="text"
                    placeholder="Painting, Event, Sculpture, etc.."
                    value={content.contentType}
                    onChange={
                        (evt) => {
                            const copy = {...content}
                            copy.contentType = evt.target.value
                            update(copy)
                        }
                    }/>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => submitContent(clickEvent)}
            className="upload-btn">
                Upload New Content
            </button>
        </form>
    )
}
 
