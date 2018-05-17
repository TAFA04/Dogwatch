// src/components/LikeDog.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Title from '../components/Title';
import {getPic} from '../actions/image'
import {getpref} from '../actions/pref'
import Button from '../components/Button';
import Image from '../components/Image';
import {connect} from 'react-redux'



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
        <Title content="Hello dog lovers!" />
        <p>blabla</p>
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
    image: state.image,
    pref: state.pref
  }
}

export default connect (mapStateToProps, {getPic, getpref}) (LikeDog)
