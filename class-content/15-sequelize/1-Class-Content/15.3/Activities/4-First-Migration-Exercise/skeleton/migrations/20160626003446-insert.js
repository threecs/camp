// This migration fil performs a bulk create to populate our database.
// This could be useful for testing purposes.

'use strict';

var models = require("../models");

module.exports = {
  // on migration...
  up: function (queryInterface, Sequelize) {
    // bulk insert these entries using our model
    return models.Fandom.bulkCreate(
      [
        {fanpage: "Power Rangers"},
        {fanpage: "Breaking Bad"},
        {fanpage: "The Simpsons"},
        {fanpage: "Star Wars"},
        {fanpage: "Star Trek"}
      ]
    )
  },

  // on undo...
  down: function (queryInterface, Sequelize) {
    // remove all instances of these fandoms from the table
    return models.Fandom.destroy({where:{fandom: [
        "Power Rangers",
        "Breaking Bad",
        "This Simpsons",
        "Star Wars",
        "Star Trek"
    ]}})
  }
};
