import React from 'react';
import "./PostContainer.css";
import CommentSection from '../CommentSection/CommentSection';

// Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component.

const PostContainer = (props) => {
    return (

        <div>
            {props.dataProps.map(item => (
                <CommentSection 
                    comments = {item.comments}
                />
            ))}
        </div>
    )
    
};

export default PostContainer;