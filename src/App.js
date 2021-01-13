import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      const response = await fetch(
        'https://jsonblob.com/api/jsonBlob/5430a7e6-54e9-11eb-a469-1f42ecf30f51'
      );
      const data = await response.json();
      this.setState({ posts: data }, () => console.log(this.state));
    } catch (error) {
      console.error('There was an error while getting posts: ', error.message);
    }
  };

  addNewPost = (obj) => {
    const newPosts = _.cloneDeep(this.state.posts);
    console.log(newPosts);
    newPosts.push(obj);
    this.setState({ posts: newPosts }, async () => {
      try {
        console.log(JSON.stringify(obj));
        const response = await fetch(
          'https://jsonblob.com/api/jsonBlob/5430a7e6-54e9-11eb-a469-1f42ecf30f51',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPosts),
          }
        );
        const data = await response.json();
        console.log(data);
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
