import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onchange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit(e) {
    e.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert('Please enter something...', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <input 
            type="text"
            name="text"
            placeholder="Search users..."
            value={this.state.text}
            onChange={this.onchange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button 
            className="btn btn-light btn-block"
            onClick={this.props.clearSearch}
            >Clear
          </button>
        )}
      </Fragment>
    );
  }
}

export default Search;