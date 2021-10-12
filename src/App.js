import React from 'react';
import Home from './components/pages/Home';
import Navbar from './layout/Navbar';
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
              <Route exact path='/' component={Home} />
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
