import React, { useState } from 'react';


export const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setLikes(likes + 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <button className={`like-button button ${isClicked && 'liked'}`} onClick={handleClick}>
            <span className="likes-counter button">{`Like | ${likes}`}</span>
        </button>
    );
};

