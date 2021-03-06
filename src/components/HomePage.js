import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Card from './Card';
import _ from 'lodash';

export default function HomePage({ posts }) {
  // if NULL (tek učitana stranica, još nema podatke)
  if (!posts) {
    return (
      <div className="home-page loader">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  const allPosts = _.cloneDeep(posts)
    .reverse()
    .map((post) => <Card key={post.postId} options={post} />);

  window.scrollTo(0, 0);
  // Ako ima postova
  if (posts.length) {
    return <div className="home-page">{allPosts}</div>;
  }
  // Ako nema postova
  return (
    <div className="home-page">
      <h1>
        Još uvijek nema postova. <Link to="/new">Kreiraj jedan?</Link>
      </h1>
    </div>
  );
}
