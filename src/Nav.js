import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
	return (
	  <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
          <li><NavLink to='/rainbow'>Rainbows</NavLink></li>
        </ul>
      </nav>  
	);
}

export default Nav;