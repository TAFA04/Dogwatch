const Sequelize = require('sequelize')
const sequelize = require('../db')

const Breed = sequelize.define('breedlikes', {

  userid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

  breedname: {
      type: Sequelize.STRING,
      allowNull: false,
    },

  likes: {
    type: Sequelize.INTEGER,
  }
}

  {
    tableName: "breedlikes",
    timestamps: false
  }
)

module.exports = BreedLikes
