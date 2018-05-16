import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Image from './components/Image.js';
// import {connect} from 'react-redux'
// import fetchImage from '..actions/image'
const request = require('superagent');




class App extends Component {

  likeClick = (event) => {
    event.preventDefault();
    window.alert('Like' );
  }

  // componentWillMount() {
  //   this.props.fetchImage()
  // }

  getPicture = () => {
    let dogPic = ""
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .query({message:"*"})
      .end((err, res) => {
        console.log(res.body.message)

      });
    return dogPic
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
        <Button content="DislikeDog" onClick={this.getPicture}/>

      </div>
    );
  }
}

// const mapStateToProps = function (state) {
//   return {
//     image: state.image
//   }
// }

// export default connect(mapStateToProps, { fetchImage })(App)
export default App
