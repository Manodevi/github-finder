import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserItem extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  render () {
    const { login, avatar_url } = this.props.user;

    return <div className="card text-center">
      <img src={avatar_url} alt={login} className="round-img" />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
      </div>
    </div>
  }
}

export default UserItem;