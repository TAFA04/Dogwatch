import {TOP_MATCHES} from '../actions/pref'


export default (state = [], { type, payload }) => {
  switch(type) {
  case TOP_MATCHES:
    console.log(payload[1]);
    return payload[1]

  default:
    return state
  }
}
