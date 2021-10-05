import Navbar from './layout/Navbar';
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title="Github Finder" />
        </header>
      </div>
    );
  }
}

export default App;
