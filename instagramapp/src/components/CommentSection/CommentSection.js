import React from 'react';
import "./CommentSection.css";
import Comment from './Comment'

// The CommentSection component will receive the array of comments as props and render a Comment component with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.

const CommentSection = (props) => {
    console.log(props.comments)
    return (
        <div>
            {props.comments.map((item, index) => (
                <Comment
                    username = {item.username}
                    text = {item.text}
                    key = {index}
                />
            ))}

            <form>

            <input
                type="text"
                value={props.comment}
                placeholder="Add comment... "
            />

            </form>
        </div>
       
    );
};




export default CommentSection;