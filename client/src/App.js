import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeDog from './containers/LikeDog'
import MatchesList from './containers/MatchesList'





class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">

        </header>
        <LikeDog />
        <MatchesList />
      </div>
    );
  }
}

export default App
