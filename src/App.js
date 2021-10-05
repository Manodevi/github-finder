import React from 'react';
import Navbar from './layout/Navbar';
import Users from './components/users/Users.js'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title="Github Finder" />
        </header>
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
