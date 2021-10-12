import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';

const Users = ({ loading, users }) => {  
  if(loading) {
    return <Spinner />;
  } else {
    return <div className="grid-3">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>;
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Users;