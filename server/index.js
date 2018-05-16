const express = require('express')
const User = require('./users/model')
const app = express()

/*const Users = {
  1: {
    id: 1,
    name: "Henk",
    email: "breadlover@gosia.com",
    password: "123456"
  },
  2: {
    id: 2,
    name: "Tim",
    email: "timtim@bread.com",
    password:"blabla"
  }
}

const Breeds = {
  1: {
    id: 1,
    breed: "schnauzer",
  },
  2: {
    id: 2,
    breed: "beagle"
  }
}

const BreedLikes = {
  1: {
    id: 1,
    userid: 1,
    breedid: 1,
    likes: 5
  },
  2: {
    id: 2,
    userid: 3,
    breedid: 2,
    likes: 6
  }

}*/


app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

app.get('/do-something', (request, response) => {
  console.log(`I'll do something, I promise!`)
  response.end()
});

app.get('/users', (req, res) => {
  User.findAll()
  .then(result => {
    res.send({
      users: result
    })
  })
  .catch(err => {
    // there was an error, return some HTTP error code
    res.status(500).send({error: 'Something went wrong with Postgres'})
  })
})



app.post('/like/:id', (request, response) =>{
  const likeId = request.params.id
  console.log("you liked: " +likeId)
  response.end()
})
