import { GET_IMAGE } from './types'
// import { getPicture } from '../dogapi'
const request = require('superagent')

export const getPic = () => (dispatch) => {
  request
    .get('https://dog.ceo/api/breeds/image/random')
    .query({message:"*"})
    .end((err, result) => {
      console.log(result.body.message);
      dispatch( {
        type: GET_IMAGE,
        payload: result.body.message

      })
    });

}
