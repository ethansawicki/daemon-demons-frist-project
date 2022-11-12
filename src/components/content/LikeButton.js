import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


export const LikeButton = () => {
    const {contentId} = useParams()
    const [likes] = useState({
        patronsId: "",
        contentsId: Number(contentId)
    });
    
    const localDaemonUser = localStorage.getItem("daemon_user");
    const daemonUserObject = JSON.parse(localDaemonUser);

    const handleClick = () => {
       const likeToDB = {
            patronsId: daemonUserObject.id,
            contentsId: likes.contentsId
       }

       const likesToDB = async () => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(likeToDB)
            }
           const req = await fetch(`http://localhost:8088/likes`, options)
           await req.json()
       }
       likesToDB()
    };

    return (

        !daemonUserObject.staff
        ? <button className={`like-button button`} onClick={handleClick}>Like</button>
        : ""
    );
};

