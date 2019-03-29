import React from 'react'; 
import "./CommentSection.css";
import Comment from './Comment'

// The CommentSection component will receive the array of comments as props and render a Comment component with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            text: '', 
        }
    }
    
    addNewComment = e => {
        e.preventDefault()

        const newComment= {
            id: `${Date.now()}`,
            username: 'Austin',
            text: this.state.text
        };

        this.setState ({
            comments: [...this.state.comments, newComment],
            text: ''
        });

    };

    handleChanges = e => {
        this.setState({ text: e.target.value })
    }

    render() {

        return (
            <div className = "commentSection">
            
                {this.state.comments && this.state.comments.map(item => (
                    <Comment 
                        key = {item.id}
                        username = {item.username}
                        text = {item.text}
                        comment = {item}
                    />
                ))}
            
                <form onSubmit={this.addNewComment}>
                    <input
                        type = "text"
                        value = {this.state.text}
                        placeholder = "Add a comment... "
                        onChange = {this.handleChanges}
                        name = "text"  
                    />
                </form>

            </div>
        )
    }     
};





export default CommentSection;