import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }
  render() {
    return (
      <button> { this.props.content }</button>
    )
  }
}

export default Button
