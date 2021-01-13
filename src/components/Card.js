import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ options }) {
  return (
    <div className="card">
      <Link to={`/${options.postId}`}>
        <div className="card__inner">
          <div className="card__inner__image-container">
            <img src={options.imgUrl} alt={`Post with id ${options.postId}`} />
          </div>
          <div className="card__inner__text-container">
            <h4>{options.author}</h4>
            <h2>{options.postTitle}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
