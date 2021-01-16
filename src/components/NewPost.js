import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NewPost.css';

const validateText = (string, maxLength) => {
  return string.trim().length > 0 && string.trim().length <= maxLength;
};
class NewPost extends Component {
  state = {
    postId: null,
    imgUrl: '',
    author: '',
    postTitle: '',
    postContent: '',
  };

  validateTitle = () => {
    return validateText(this.state.postTitle, 20);
  };

  validateAuthor = () => {
    return validateText(this.state.author, 20);
  };

  validateContent = () => {
    return validateText(this.state.postContent, 200);
  };

  validateUrl = () => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(this.state.imgUrl);
  };

  validateForm = () => {
    return [
      this.validateTitle(),
      this.validateUrl(),
      this.validateAuthor(),
      this.validateContent(),
    ].every((el) => el);
  };

  clickButtonHandler = () => {
    // Ako ne prođe validaciju, ne submituj
    if (!this.validateForm()) return;

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
        <label htmlFor="post-title">Naziv posta</label>
        <input
          className={this.validateTitle() ? 'valid' : 'not-valid'}
          type="text"
          id="post-title"
          placeholder="Unesite naziv posta"
          value={this.state.postTitle}
          onChange={(e) => this.setState({ postTitle: e.target.value })}
        />
        <label htmlFor="img-url">URL naslovne fotografije</label>
        <input
          className={this.validateUrl() ? 'valid' : 'not-valid'}
          type="url"
          id="img-url"
          placeholder="Unesite URL naslovne fotografije"
          value={this.state.imgUrl}
          onChange={(e) => this.setState({ imgUrl: e.target.value })}
        />
        <label htmlFor="author">Autor</label>
        <input
          className={this.validateAuthor() ? 'valid' : 'not-valid'}
          type="text"
          id="author"
          placeholder="Unesite ime autora"
          value={this.state.author}
          onChange={(e) => this.setState({ author: e.target.value })}
        />
        <label htmlFor="post-content">Sadržaj</label>
        <textarea
          className={this.validateContent() ? 'valid' : 'not-valid'}
          type="text"
          id="post-content"
          rows="10"
          placeholder="Unesite sadržaj posta"
          value={this.state.postContent}
          onChange={(e) => this.setState({ postContent: e.target.value })}
        />
        <button onClick={this.clickButtonHandler}>Dodaj</button>
      </div>
    );
  }
}

export default withRouter(NewPost);
