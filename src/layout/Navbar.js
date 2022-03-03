import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <ul className="Navbar">
      <li>
        <Link to ="/">
          <button>Gallery</button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button>About</button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <button>Blog</button>
        </Link>
      </li>
    </ul>
  )
}
export default Navbar;