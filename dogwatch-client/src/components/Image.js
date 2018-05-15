import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

class Image extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired
  }
  render() {
    return (
    <img src={this.props.content} alt="dog"/>

    )
  }
}

export default Image
