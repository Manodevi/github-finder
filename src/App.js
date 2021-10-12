import React, { Fragment } from 'react';
import Navbar from './layout/Navbar';
import Users from './components/users/Users.js';
import Search from './components/users/Search';
import Alert from './layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';

const App = () => { 
  return (
    <GithubState>
      <Router>       
        <div className="App">
          <header className="App-header">
            <Navbar title="Github Finder" />
          </header>
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )}
                />
                <Route path="/about" exact component={About} />
                <Route path="/user/:login" exact render={props => (
                  <User {...props} />
                )} />
                <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
