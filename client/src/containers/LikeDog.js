// src/components/LikeDog.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import {getPic} from '../actions/image'
import Button from '../components/Button';
import Image from '../components/Image';
import {connect} from 'react-redux'
import './LikeDog.css'




class LikeDog extends PureComponent {
  static propTypes = {
    updateDog: PropTypes.func.isRequired
  }

  likeClick = () => {
    //e.preventDefault();
    const urlParts = this.props.image.split('/')
    const breedName = urlParts[urlParts.length-2]
    window.alert( breedName )
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
        <p>Welcome to our app</p>
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
