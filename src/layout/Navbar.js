import React from 'react';
import PropTypes from 'prop-types';

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
        <div>
          <i className={this.props.icon} /> {this.props.title}
        </div>
      </nav>
    );
  }
}

export default Navbar;