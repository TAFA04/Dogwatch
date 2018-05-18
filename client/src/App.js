import React, { Component } from 'react';
import './App.css';
import LikeDog from './containers/LikeDog'
import MatchesList from './containers/MatchesList'
import Title from './components/Title'
import faPaw from '@fortawesome/fontawesome-free-solid/faPaw'
import faPoo from '@fortawesome/fontawesome-free-solid/faPoo'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import fontawesome from '@fortawesome/fontawesome'

fontawesome.library.add(faPaw, faPoo, faEnvelope)

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Title className="Title" content="DOGWATCH" />
        </header>
        <br/>
        <LikeDog />
        <MatchesList />
      </div>
    );
  }
}

export default App
