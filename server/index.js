const express = require('express')
const app = express()

const Users = {
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

}


app.listen(4001, () => console.log('Express API listening on port 4001'))


app.get('/do-something', (request, response) => {
  console.log(`I'll do something, I promise!`)
  response.end()
});

app.get('/users/:id', (request, response) => {
  const userId = request.params.id
  response.send(Users[userId])
});

app.post('/like/:id', (request, response) =>{
  const likeId = request.params.id
  console.log("you liked: " +likeId)
})
