import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Image from './components/Image.js';

class App extends Component {

  // handleClick = (e) => {
  //   e.preventDefault();
  //   alert("it is working!")
  // }

  likeClick = (event) => {
    event.preventDefault();
    window.alert('this is:' );
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Title content="Hello dog lovers!" />
        <p>Welcome to our app</p>
        <br />
        <Image content="http://www.animatedimages.org/data/media/202/animated-dog-image-0712.gif"/>
        <br />
        <Button content="LikeDog" onClick={this.likeClick}/>

      </div>
    );
  }
}

export default App;
