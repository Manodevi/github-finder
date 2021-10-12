import React, { useState, Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = props => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const {users, setAlert, searchUsers, clearUsers} = githubContext;

  const onchange = e => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      setAlert('Please enter something...', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  }
  const showClear = users.length > 0 ? true : false;
  
  return (
    <Fragment>
      <form onSubmit={onSubmit} className="form">
        <input 
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onchange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button 
          className="btn btn-light btn-block"
          onClick={clearUsers}
          >Clear
        </button>
      )}
    </Fragment>
  );  
}


export default Search;