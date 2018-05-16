// src/components/LikeDog.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

class LikeDog extends PureComponent {
  static propTypes = {
    updateDog: PropTypes.func.isRequired
  }
  render() {
    return (
      <h1>{ this.props.content }</h1>
    )
  }
}

export default LikeDog
