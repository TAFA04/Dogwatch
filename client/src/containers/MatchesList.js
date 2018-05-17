import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getpref, topmatches} from '../actions/pref'




class MatchesList extends PureComponent {
  static PropTypes = {
    matches: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })).isRequired
  }

  getPreferences = () => {
    this.props.getpref()
  }


render(){
  const {matches } = this.props
  if(!this.props.pref)
    this.getPreferences()
  return (
    <div>

      <p>{this.props.pref}</p>

      </div>



)}

}
const mapStateToProps = function (state) {
  return {
    pref: state.pref
  }
}

export default connect (mapStateToProps, {getpref}) (MatchesList)
