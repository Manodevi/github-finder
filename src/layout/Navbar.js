import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>            
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  icon: "fa-github fab"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;