import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="comment">
        <img
          className="comment-avatar"
          src={comment.author.avatar}
          alt="author"
        />
        <div className="comment-content">
          <p>
            <span>{comment.author.name}</span>
            <span>{comment.content}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Comment;
