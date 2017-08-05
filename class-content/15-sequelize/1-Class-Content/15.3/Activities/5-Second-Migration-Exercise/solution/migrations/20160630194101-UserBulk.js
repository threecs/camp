// ANSWER ASSIGNMENT 5
// ===================

// this creates a bulk insert to users 
// while associating them with fandoms
'use strict';

// User model (to create our bulk insert)
var User = require('../models')["User"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return User.bulkCreate([
      {username: "George", email:'george@me.com'},
      {username: "Frank", email:'frank@me.com'},
      {username: "Maya", email:'maya@me.com'},
      {username: "Maria", email:'maria@me.com'},
      {username: "Alison", email:'alison@me.com'}
    ])
  },

  down: function (queryInterface, Sequelize) {
    // remove all instances of these fandoms from the table
    return User.destroy({where:{username: [
        "George",
        "Frank",
        "Maya",
        "Maria",
        "Alison"
    ]}})
  }
}
