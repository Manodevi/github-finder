import React from 'react';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
  static defaultProps = {
    title: "Github Finder"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render () {
    return (
      <nav>
        <div>
          {this.props.title}
        </div>
      </nav>
    );
  }
}

export default Navbar;