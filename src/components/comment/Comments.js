import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Comments.css"
import { NewComment } from './NewComment'

export const Comments = () => {
    const [comments, setComments] = useState([])
    const {contentId} = useParams()

    const localDaemonUser = localStorage.getItem("daemon_user");
    const daemonUserObject = JSON.parse(localDaemonUser);

    const fetchComments = async () => {
        const req = await fetch(`http://localhost:8088/comments?contentsId=${contentId}&_expand=patrons`)
        const res = await req.json()
        setComments(res)
    }

    useEffect(
        () => {
            fetchComments()
        },
        [contentId]
    )

  return (
    <div className='comments'>
        <div className='new-comment'>
            {
                !daemonUserObject.staff
                ? <NewComment fetchComments={fetchComments}/>
                : ""
            }
        </div>
        {
            comments.map(comment => {
                return(
                    <div className='comment-card' key={`comment--${comment.id}`}>
                        <div><i>{comment.patrons?.name}</i> Said:
                            <div>{comment.commentText}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
