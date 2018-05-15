import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Image from './components/Image.js';

class App extends Component {
  printToPage = () => {
    console.log("it is working!")
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Title content="Hello dog lovers!" />
        <Title content="Welcome to our app."/>
        <Button content="LikeDog" onClick={this.printToPage()}/> <br />
        <Image content="http://www.animatedimages.org/data/media/202/animated-dog-image-0712.gif"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
