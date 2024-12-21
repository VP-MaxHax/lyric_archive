import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Lyric Archive</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;