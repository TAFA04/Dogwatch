import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getpref, topmatches} from '../actions/pref'
import {Link} from 'react-router-dom'


const breed = this.props.getpref


class MatchesList extends PureComponent {
  static PropTypes = {
    matches: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })).isRequired
  }

  componentWillMount() {
    this.props.topmatches();
    this.props.getpref()
  }

render(){
  const {matches, breed } = this.props


}


}
