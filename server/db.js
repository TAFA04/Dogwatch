var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:davidH@localhost:5432/postgres')

module.exports = sequelize
