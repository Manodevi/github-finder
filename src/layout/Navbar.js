import React from 'react';

class Navbar extends React.Component {

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