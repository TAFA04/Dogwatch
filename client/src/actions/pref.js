import * as request from 'superagent'

const baseUrl = 'http://localhost:4001/API'

export const PREF_OF_USER = 'PREF_OF_USER'
export const TOP_MATCHES = 'TOP_MATCHES'
export const USER_MATCH = 'USER_MATCH'


export const getpref = () => (dispatch) => {

  request
    .get(`${baseUrl}/pref/1`)
    .then(response => dispatch({
      type: PREF_OF_USER,
      payload: response.body.result.breedname
    }))
    .catch(err => alert(err))
}



export const topmatches = () => (dispatch) => {

  request
    .get(`${baseUrl}/top`)
    .then(response => dispatch({
      type: TOP_MATCHES,
      payload: response.body
    }))
}

export const usermatch = (userid) => (dispatch) => {

  request
    .get(`${baseUrl}/users/${userid}`)
    .then(response => dispatch({
      type: USER_MATCH,
      payload: response.body.users.email
    }))
    .catch(err => alert(err))
}
