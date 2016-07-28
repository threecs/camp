// this migration file will rename the fandom column.
// NOTE: This will NOT replace all references to "fandom" with "fanpage"
// in our model, routes, and server.js. We must do that manually

// This is still useful, though, if we want to change the column name. 

'use strict';

module.exports = {
  // on migration, rename the fandom column in the fandoms table
  up: function (queryInterface, Sequelize) {
    queryInterface.renameColumn("fandoms", "fandom", "fanpage");

  },

  // on undo, revert the name of the column to it's original state
  down: function (queryInterface, Sequelize) {
    queryInterface.renameColumn("fandoms", "fanpage", "fandom");
  }
};
