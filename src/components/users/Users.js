import React, { Component } from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';

class Users extends Component {  
  static propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }
  render () {
    const { loading, users } = this.props;
    if(loading) {
      return <Spinner />;
    } else {
      return <div className="grid-3">
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>;
    }
  }
}

export default Users;