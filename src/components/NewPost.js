import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NewPost.css';

class NewPost extends Component {
  state = {
    postId: null,
    imgUrl: '',
    author: '',
    postTitle: '',
    postContent: '',
  };

  clickButtonHandler = () => {
    this.setState({ postId: this.props.nextId }, () => {
      this.props.onSubmit(this.state);
      this.setState({
        postId: null,
        imgUrl: '',
        author: '',
        postTitle: '',
        postContent: '',
      });
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div className="new-post">
        <label htmlFor="post-title">Title</label>
        <input
          type="text"
          id="post-title"
          maxLength="20"
          placeholder="Enter the title of the post"
          value={this.state.postTitle}
          onChange={(e) => this.setState({ postTitle: e.target.value })}
        />
        <label htmlFor="img-url">Image URL</label>
        <input
          type="url"
          id="img-url"
          placeholder="Enter the url of the image"
          value={this.state.imgUrl}
          onChange={(e) => this.setState({ imgUrl: e.target.value })}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          maxLength="20"
          placeholder="Enter the name of the author"
          value={this.state.author}
          onChange={(e) => this.setState({ author: e.target.value })}
        />
        <label htmlFor="post-content">Content</label>
        <textarea
          type="text"
          id="post-content"
          rows="10"
          maxLength="250"
          placeholder="Enter the content of the post"
          value={this.state.postContent}
          onChange={(e) => this.setState({ postContent: e.target.value })}
        />
        <button onClick={this.clickButtonHandler}>Dodaj</button>
      </div>
    );
  }
}

export default withRouter(NewPost);
