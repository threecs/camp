'use strict';
module.exports = function(sequelize, DataTypes) {
  var Fandom = sequelize.define('Fandom', {
    fandom: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Fandom;
};