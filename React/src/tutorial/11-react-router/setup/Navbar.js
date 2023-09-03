import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav>
    <ul>
      {/* to is the page where the linl goes, notice that in indes.js the path for home is "/" */}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/people">People</Link>
      </li>
    </ul>
  </nav>;
};

export default Navbar;
