const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
chai.use(chaiHttp)

const host = 'http://localhost:4001'

describe('Dogwatch REST API', () => {

  it('GET /users/1 returns 200 OK', done => {
    chai.request(host)
      .get('/users/1')
      .end(function(err, res) {
        expect(res).to.have.status(200)
        done()
      })
  })

  it('POST /like/2 returns "you liked: 2" in the server window', done => {
    chai.request(host)
      .post('/like/2')
      .end();
      done()
  })

})
