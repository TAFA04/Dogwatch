import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getpref, topmatches, usermatch} from '../actions/pref'
import Button from '../components/Button';




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
  getUserMAtch = () => {
    this.props.usermatch(this.props.matches.userid)
  }

render(){

    const { pref, matches, user } = this.props

    if(!this.props.pref)
      this.getPreferences();
    if(!this.props.matches)
      this.getMatches();

    return (
      <div>
        <p>Your prefered breed is: {this.props.pref} </p>
        <p>{this.props.user}</p>
        <Button className = "Btn__comment" icon="envelope" onClick={this.getUserMAtch} />
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
