import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './Button.css'

class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <button className={this.props.className} onClick={ this.props.onClick }>  <FontAwesomeIcon icon={this.props.icon} /> </button>
    )
  }
}

export default Button
