import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={require('../img/logo.png').default} alt="Logo" />
          </Link>
        </li>
        <li>
          <Link to="/new">New Post</Link>
        </li>
      </ul>
    </nav>
  );
}
