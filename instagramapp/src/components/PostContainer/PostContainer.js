import React from 'react';
import "./PostContainer.css";
import CommentSection from '../CommentSection/CommentSection';
import CommentForm from '../CommentSection/CommentForm'

// Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component.

const PostContainer = (props) => {
    return (

        <div className = "postContainer">

            {props.dataProps.map(item => (

                <div key = {item.id} className = "postCard">

                    <header className = "postHeader">
                        <img src = {item.thumbnailUrl} alt = {item.username} /> <strong>{item.username}</strong>
                    </header>

                    <div className = "postImg">
                        <img src = {item.imageUrl} alt = {item.username} />
                    </div>
                    
                    <div className = "emojisLikes">
                        <div className = "emojis">

                        </div>
                        <div className = "likes">
                            <strong><p>{item.likes} likes</p></strong>
                        </div>
                    </div>

                    <CommentSection 
                        comments = {item.comments}
                        key = {item.id}
                    />

                    <CommentForm
                    />

                </div>
            ))}

        </div>
    )
    
};

export default PostContainer;