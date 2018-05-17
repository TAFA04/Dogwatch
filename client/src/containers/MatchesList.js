import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getpref, topmatches} from '../actions/pref'




class MatchesList extends PureComponent {
  static propTypes = {
      pref: PropTypes.string.isRequired,
      matches: PropTypes.arrayOf(PropTypes.string).isRequired
    }

  getPreferences = () => {
    this.props.getpref()
  }
  getMatches = () => {
    const itdoesnothing = this.props.topmatches();
    console.log(itdoesnothing);
  }


render(){

  const { pref, matches } = this.props

  if(!this.props.pref)
    this.getPreferences();
  return (
    <div>
      <p>{this.props.pref}</p>
      <p>{this.props.matches.userid}</p>
      <button onClick={this.getMatches}> get matches</button>
    </div>



)}

}
const mapStateToProps = function (state) {
  return {
    pref: state.pref,
    matches: state.matches
  }
}

export default connect (mapStateToProps, {getpref, topmatches}) (MatchesList)
