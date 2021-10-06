import React from 'react';
import Navbar from './layout/Navbar';
import Users from './components/users/Users.js';
import Search from './components/users/Search';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {    
    this.setState({ loading: true });
    const axiosRes = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: axiosRes.data, loading: false });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title="Github Finder" />
        </header>
        <div className="container">
          <Search />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
