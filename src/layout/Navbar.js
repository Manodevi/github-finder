import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  static defaultProps = {
    icon: "fa-github fab"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render () {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to={`/user/${this.props.login}`}>User</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;