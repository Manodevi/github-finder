import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };

  onchange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    return (
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
    );
  }
}

export default Search;