import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="logo">Your Logo</div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">LoginPage</Link></li>
                <li><Link to="/blog-list">Blog</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
