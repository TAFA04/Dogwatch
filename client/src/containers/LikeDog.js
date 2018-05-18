// src/components/LikeDog.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import {getPic} from '../actions/image'
import {decrement} from '../actions/counter'
import Button from '../components/Button';
import Image from '../components/Image';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './LikeDog.css'

const request = require('superagent')

class LikeDog extends PureComponent {
  static propTypes = {
    updateDog: PropTypes.func.isRequired
  }

  likeClick = () => {
    //e.preventDefault();
    const urlParts = this.props.image.split('/')
    const breedName = urlParts[urlParts.length-2]
      request
        .post('http://localhost:4001/API/like')
        .send({breed: breedName, userid:1})
        .end((err, result) => {
          console.log('sent API req');
        });
    this.reduceHandler()
  }

  // componentWillMount() {
  //   this.props.fetchImage()
  // }


  getImage = () => {
    // e.preventDefault();
    this.props.getPic()
  }

  reduceHandler = () => {
    this.props.decrement()
    this.getImage()
  }

  render() {
    if(!this.props.image)
      this.getImage()

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title"> "DOGWATCH" </h1>
        </header>
        <p>Welcome to our app Henk <img className="Avatar" src="avatar-henk.png" alt = "Avatar"></img> </p>
        <br />
        <Image content= {this.props.image} />
        <br />
        <Button
          className="Btn__paw"
          icon="paw"
          onClick={this.likeClick}/>
        <Button
          className="Btn__poo"
          icon="poo"
          onClick={this.reduceHandler}/>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    image: state.image,
    counter: state.counter
  }
}

export default connect (mapStateToProps, {getPic, decrement}) (LikeDog)
