import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="logo">Your Logo</div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/LoginPage">LoginPage</Link></li>
                <li><Link to="/BlogList">Blog</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
