// src/components/LikeDog.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Title from '../components/Title';
import Button from '../components/Button';
import Image from '../components/Image';
import {connect} from 'react-redux'
const request = require('superagent');

class LikeDog extends PureComponent {
  static propTypes = {
    updateDog: PropTypes.func.isRequired
  }

  likeClick = (e) => {
    e.preventDefault();
    window.alert('Like' );
  }

  // componentWillMount() {
  //   this.props.fetchImage()
  // }


  // getImage = (e) => {
  //   e.preventDefault();
  //   this.props.getPic
  // }

  getPicture = (result) => {
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .query({message:"*"})
      .end((err, result) => {
        console.log(result.body.message)
      });
  }


  render() {
    return (
      <div>
        <Title content="Hello dog lovers!" />
        <p>Welcome to our app</p>
        <br />
        <Image content= {this.props.image} />
        <br />
        <Button
          content="LikeDog"
          onClick={this.likeClick}/>
        <Button
          content="DislikeDog"
          onClick={this.getPicture}/>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    image: state.image
  }
}

export default connect (mapStateToProps) (LikeDog)
