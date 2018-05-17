const request = require('superagent')

export const getPicture = (result) => {
  request
    .get('https://dog.ceo/api/breeds/image/random')
    .query({message:"*"})
    .end((err, result) => {
      console.log(result.body.message);
      return result.body.message
    });
}
