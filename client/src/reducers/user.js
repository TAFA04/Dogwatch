import {USER_MATCH} from '../actions/pref'


export default (state = '', { type, payload }) => {
  switch(type) {
  case USER_MATCH:
    console.log(payload);
    return payload

  default:
    return state
  }
}
