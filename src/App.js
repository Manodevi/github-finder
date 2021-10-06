import React from 'react';
import Navbar from './layout/Navbar';
import Users from './components/users/Users.js';
import Search from './components/users/Search';
import Alert from './layout/Alert';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {    
  //   this.setState({ loading: true });
  //   const axiosRes = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users: axiosRes.data, loading: false });
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const axiosRes = await axios.get(`https://api.github.com/search/users?q=${text}&per_page=30&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: axiosRes.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (message, type) => {
    this.setState({ alert: {message, type}});
  };

  render () {
    const {users, loading, alert} = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title="Github Finder" />
        </header>
        <div className="container">
          <Alert alert={alert} />
          <Search 
            searchUsers={this.searchUsers} 
            clearSearch={this.clearUsers}
            setAlert={this.setAlert}
            showClear={users.length > 0 ? true : false}
            />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
