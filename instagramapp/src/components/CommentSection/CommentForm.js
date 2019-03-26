import React from 'react';
import "./CommentSection.css";

const CommentForm = (props) => {
    return (
            <div className = "commentForm">
                <form>
                    <input
                        type = "text"
                        value = {props.comment}
                        placeholder = "Add a comment... "
                    />
                </form>
            </div>
    );
};

export default CommentForm;