import * as request from 'superagent'

const baseUrl = 'http://localhost:4001/API'

export const PREF_OF_USER = 'PREF_OF_USER'
export const TOP_MATCHES = 'TOP_MATCHES'


export const getpref = () => (dispatch) => {

  request
    .get(`${baseUrl}/pref/1`)
    .then(response => dispatch({
      type: PREF_OF_USER,
      payload: response.body.result.breedname
    }))
    .catch(err => alert(err))
}



/*export const topmatches = (banana, currentuserid) => (dispatch) =>
	request
		.post(`${baseUrl}/top`)
		.send({ "schnauzer", 1 })
		.then(response => {
			dispatch({
				type: TOP_MATCHES,
				payload: response.body
			})
		})
*/
