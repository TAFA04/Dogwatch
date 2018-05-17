import {GET_IMAGE} from '../actions/types'

export default (state = '', { type, payload } = {}) => {
  switch(type) {
  case GET_IMAGE:
    return state = payload.image
  default:
    return state
  }
}
