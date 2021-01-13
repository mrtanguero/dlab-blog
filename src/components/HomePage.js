import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Card from './Card';

export default function HomePage({ posts }) {
  // if NULL (tek učitana stranica)
  if (!posts) {
    return <div className="home-page">Loading...</div>;
  }

  const allPosts = posts.map((post) => (
    <Card key={post.postId} options={post} />
  ));
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
