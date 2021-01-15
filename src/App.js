import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { jsonBlob } from './apis/jsonBlob';
import { BLOB_ID } from './config';
import _ from 'lodash';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import NewPost from './components/NewPost';
import BlogPost from './components/BlogPost';

export default class App extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const { data } = await jsonBlob.get(`/${BLOB_ID}`);
      this.setState({ posts: data });
    } catch (error) {
      console.error('There was an error while getting posts: ', error.message);
    }
  };

  addNewPost = (obj) => {
    const newPosts = _.cloneDeep(this.state.posts);
    newPosts.push(obj);
    this.setState({ posts: newPosts }, () => {
      try {
        jsonBlob.put(`/${BLOB_ID}`, newPosts);
      } catch (error) {
        console.error('Greška prilikom slanja posta:', error.message);
      }
    });
  };

  getNextId = () => {
    if (!this.state.posts) return;

    return this.state.posts.length
      ? this.state.posts[this.state.posts.length - 1].postId + 1
      : 1;
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage posts={this.state.posts} />
          </Route>
          <Route path="/new">
            <NewPost nextId={this.getNextId()} onSubmit={this.addNewPost} />
          </Route>
          <Route
            path="/:postId"
            children={<BlogPost posts={this.state.posts} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
