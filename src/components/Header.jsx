import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <nav className={nav-links ${isMobile ? 'mobile' : ''}}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={() => -setIsMobile(!isMobile)}>
        &#9776; {/* Hamburger icon */}
      </div>
    </header>
  );
};

export default Header;