import {GET_IMAGE} from '../actions/types'

export default (state = '', { type, payload }) => {
  switch(type) {
  case GET_IMAGE:
    console.log(payload);
    return payload
  default:
    return state
  }
}
