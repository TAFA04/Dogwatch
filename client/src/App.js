import React, { Component } from 'react';
import './App.css';
import LikeDog from './containers/LikeDog'
import MatchesList from './containers/MatchesList'
import Title from './components/Title'
import faPaw from '@fortawesome/fontawesome-free-solid/faPaw'
import faPoo from '@fortawesome/fontawesome-free-solid/faPoo'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import fontawesome from '@fortawesome/fontawesome'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

fontawesome.library.add(faPaw, faPoo, faEnvelope)

class App extends Component {

  render() {
    return (
      <Router>
              <div className="App">
                <Route exact path="/LikeDog" component={LikeDog} />
                <Route exact path="/Preferences" component={MatchesList} />
                <Route exact path="/" render={ () => <Redirect to="/LikeDog" /> } />
              </div>
            </Router>
    );
  }
}

export default App
