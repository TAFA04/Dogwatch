import { GET_IMAGE } from './types'
import { getPicture } from './App'


export const getPic = () => {
  const image = getPicture()
  return {
    type: GET_IMAGE,
    payload: {
      image,
    }
  }
}
