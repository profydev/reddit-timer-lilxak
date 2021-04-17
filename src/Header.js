import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="/logo.svg" alt="Reddit Timer" />
        </Link>
        <div className="header-nav-links">
          <Link to="/search"> Search </Link>
          <Link to="/#how-it-works"> How it works </Link>
          <Link to="/#about"> About </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
