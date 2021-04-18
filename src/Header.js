import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <nav className={styles.nav_bar}>
        <Link to="/">
          <img className={styles.header_logo} src="/logo.svg" alt="Reddit Timer" />
        </Link>
        <div className={styles.header_nav_links}>
          <Link to="/search?sub=javascript"> Search </Link>
          <Link to="/#how-it-works"> How it works </Link>
          <Link to="/#about"> About </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
