const express = require('express')
const sequelize = require('sequelize')
const User = require('./users/model')
const Breed = require('./breedlikes/model')
var cors = require('cors')
const app = express()
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
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

app.get('/API/pref/:userid', (req, res) => {
  const userid = req.params.userid;
  const likemax = Breed.max('likes', {
    where: {userid: userid}
  })
Breed.findOne({
  attributes: ['breedname'],

where: {likes: likemax} && {userid: userid}
})
  .then(result => {
   res.send({result})
  })
  .catch(err => {
    // there was an error, return some HTTP error code
    res.status(500).send({error: 'Something went wrong with Postgres'})
  })
})

app.post('/API/top', (req, res) => {
  const banana = req.body.banana;
  const currentuserid = req.body.currentuserid;
  const notcurrentuser = {[sequelize.Op.notIn]: [currentuserid]}
  /*const likemax = Breed.max('likes', {
    where: {breedname: banana}
  })
  console.log(likemax)*/
Breed.findAll({
  //attributes: ['userid'],
  /*where: {
    userid:notcurrentuser,
    breedname:banana,
    likes:
  }*/
where: {userid: notcurrentuser} && {breedname: banana} 
})
  .then(result => {
   res.send({result})
  })
  .catch(err => {
    // there was an error, return some HTTP error code
    res.status(500).send({error: 'Something went wrong with Postgres'})
  })
})

app.post('/API/like', (req, res) =>{
  Breed.count({where: {userid:req.body.userid, breedname: req.body.breed}}).then((count) => {
    if(count !== 0){
      console.log('increment!');
        Breed.increment('likes',{
          where: {
            userid: req.body.userid,
            breedname: req.body.breed 
          }
        })
    } else {
      console.log('create!');
      Breed.create({
        userid: req.body.userid,
        breedname: req.body.breed,
        likes: 1
      })
    }
  })

  .then(result => {
    return res
})
res.end()
})