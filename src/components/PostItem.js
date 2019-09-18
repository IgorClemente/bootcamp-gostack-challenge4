import React, { Component } from "react";

import Comment from "./Comment";

class PostItem extends Component {
  postItemHeader(props) {
    const { author, date } = props;

    return (
      <div className="post-header">
        <img className="avatar" src={author.avatar} alt="author" />
        <div className="post-header-details">
          <span className="post-author">{author.name}</span>
          <span className="post-date">{date}</span>
        </div>
      </div>
    );
  }

  postItemComments(props) {
    const { comments } = props;

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ));
  }

  render() {
    const { author, date, content, comments } = this.props.post;

    return (
      <div className="post">
        {this.postItemHeader({ author, date })}
        <p class="post-content">{content}</p>
        <div className="divisor" />
        {this.postItemComments({ comments })}
      </div>
    );
  }
}

export default PostItem;
