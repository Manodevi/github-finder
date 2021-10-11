import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  const [text, setText] = useState('');

  const onchange = e => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      props.setAlert('Please enter something...', 'light');
    } else {
      props.searchUsers(text);
      setText('');
    }
  }
  
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
      {props.showClear && (
        <button 
          className="btn btn-light btn-block"
          onClick={props.clearSearch}
          >Clear
        </button>
      )}
    </Fragment>
  );  
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;