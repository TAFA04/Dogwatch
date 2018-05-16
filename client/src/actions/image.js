// import * as request from 'superagent'
//
// const baseUrl = 'https://dog.ceo/api/breeds/image/random'
//
// export const FETCHED_IMAGE = 'FETCHED_IMAGE'
// // export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'
//
// export const fetchImage = () => (dispatch) => {
//   request
//     .get(baseUrl)
//     .then(res => dispatch({
//       type: FETCHED_IMAGE,
//       payload: res.body.message
//     }))
//     .catch(err => alert(err))
// }
//
// export const fetchAllProducts = () => (dispatch) => {
//   // ... implement!
//   // Hint: make sure to use json.products and not json as payload,
//   // because you send back an envelope! (so response.body.products)
// }
