import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getpref, topmatches, usermatch} from '../actions/pref'
import {Redirect} from 'react-router-dom'


class MatchesList extends PureComponent {
  static propTypes = {
    pref: PropTypes.string.isRequired,
    matches: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  getPreferences = () => {
    this.props.getpref()
  }
  getMatches = () => {
   this.props.topmatches();
  }
  getUserMatch = () => {
    this.props.usermatch(this.props.matches.userid)
  }

render(){

    const { pref, matches, user } = this.props

    if(!this.props.pref)
      this.getPreferences();
    if(!this.props.matches)
      this.getMatches()


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title"> "DOGWATCH" </h1>
        </header>
        <p>Your prefered breed is {this.props.pref} !!!</p>
        <p>Your match is {this.props.user} !!!</p>
        <button onClick={this.getUserMatch}>click for Tim</button>
      </div>
    )
  }

}
const mapStateToProps = function (state) {
  return {
    pref: state.pref,
    matches: state.matches,
    user: state.user
  }
}

export default connect (mapStateToProps, {getpref, topmatches, usermatch}) (MatchesList)
