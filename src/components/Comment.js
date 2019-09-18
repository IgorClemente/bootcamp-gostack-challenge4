import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="comment">
        <img src={comment.author.avatar} alt="author" />
        <div>
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
