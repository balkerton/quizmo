import React, { Component } from 'react';
import logo from './JeopardyLogo.png';
import './App.css';
import HomepageHeader from './components/HomepageHeader';
import GoButton from './components/GoButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HomepageHeader />
        </header>
        <GoButton />
      </div>
    );
  }
}

export default App;
