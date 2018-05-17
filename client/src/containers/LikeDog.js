// src/components/LikeDog.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Title from '../components/Title';
import {getPic} from '../actions/image'
import Button from '../components/Button';
import Image from '../components/Image';
import {connect} from 'react-redux'



class LikeDog extends PureComponent {
  static propTypes = {
    updateDog: PropTypes.func.isRequired
  }

  likeClick = () => {
    //e.preventDefault();
    window.alert('Like' );
  }

  // componentWillMount() {
  //   this.props.fetchImage()
  // }


  getImage = () => {
    // e.preventDefault();
    this.props.getPic()
  }


  render() {
    if(!this.props.image)
      this.getImage()
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
          onClick={this.getImage}/>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    image: state.image
  }
}

export default connect (mapStateToProps, {getPic}) (LikeDog)
