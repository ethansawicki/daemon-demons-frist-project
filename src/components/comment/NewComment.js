import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Comments.css"

export const NewComment = ({fetchComments}) => {
  const {contentId} = useParams()
  const [newComment, setNewComment] = useState({
    contentsId: Number(contentId),
    commentText: ""
  })

  const localDaemonUser = localStorage.getItem("daemon_user");
  const daemonUserObject = JSON.parse(localDaemonUser);

  const handleClick = (event) => {
    event.preventDefault()
    const commentToApi = {
      patronsId: daemonUserObject.id,
      contentsId: newComment.contentsId,
      commentText: newComment.commentText
    }
    const sendComment = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(commentToApi)
      }
      const response = await fetch(`http://localhost:8088/comments`, options)
      await response.json()
      fetchComments()
      setNewComment({
        contentsId: Number(contentId),
        commentText: ""
      })
    }
    sendComment()
  }

  return (
    <form className='comment-form'>
      <fieldset className='comment-field'>
        <input
          required autoFocus
          placeholder='Share Your Thoughts...'
          className='comment-input'
          value={newComment.commentText}
          onChange={
            (event) => {
              const copy = {...newComment}
              copy.commentText = event.target.value
              setNewComment(copy)
            }
          }
        />
        <button className='submit-btn' onClick={(clickEvent) => {handleClick(clickEvent)}}>Submit</button>
      </fieldset>
    </form>
  )
}
