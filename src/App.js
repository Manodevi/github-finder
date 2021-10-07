import React, {Fragment} from 'react';
import Navbar from './layout/Navbar';
import Users from './components/users/Users.js';
import Search from './components/users/Search';
import Alert from './layout/Alert';
import axios from 'axios';
import About from './components/pages/About';
import User from './components/users/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    users: [],
    user: {},
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

  getUser = async (username) => {
    this.setState({ loading: true });
    const axiosRes = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: axiosRes.data, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (message, type) => {
    this.setState({ alert: {message, type}});
    setTimeout(() => this.setState({alert: null}), 3000);
  };

  render () {
    const {users, user, loading, alert} = this.state;
    
    return (
      <Router>       
        <div className="App">
          <header className="App-header">
            <Navbar title="Github Finder" />
          </header>
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearSearch={this.clearUsers}
                    setAlert={this.setAlert}
                    showClear={users.length > 0 ? true : false}
                    />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
               />
               <Route path="/about" exact component={About} />
               <Route path="/user/:login" exact render={props => (
                  <User 
                    {...props}
                    loading={loading}
                    getUser={this.getUser}
                    user={user}
                    />
               )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
