// index.js, brings everything together
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


/* WHY INDEX.JS?
 *
 * Since we define our models in seperate places, we need another file to bring them together.
 * By saving them to the same object, we can associate the two. 
 * 
 * Once all of our models are associated, we can export a model object 
 * to any part of the server that needs it. (our routes and server.js, essentially).
 *
 * While this extra step is complex, and may seem like a pain,
 * it will make creating and associating data between multiple tables a cinch. 
 * In other words, no pain no gain. 
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */



// DEPENDENCIES
// ============

// 1. Fileseeker: let's us read in the models
var fs = require("fs");
// 2. Path: let's us find the models with _dirname
var path = require("path");
// 3. Sequelize (of course)
var Sequelize = require("sequelize");

var env = process.env.NODE_ENV || "development";

// 4. Our sequelize connection
var config = require("../config/config.json")[env];

var sequelizeConnection = new Sequelize(config.database, config.username, config.password, config)


// IMPORTANT
// =========
// We're going to store every model we made in this model object 
var models = {};




// THIS FILESEEKING PART IS COMPLEX, BUT DON'T WORRY:
//   Feel free to copy and past this into your assignments. 
//   This is a solution published by the Sequelize team themselves.

// start our fileseeker code
fs
  // read every file in the current directory
  .readdirSync(__dirname)
  // filter out any file that lacks an extension or that's index.js
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
})
// for every file we didn't filter out,
.forEach(function(file) {

  // 'IMPORT'-ANT (sorry)
  // ==================
  // Sequelize's 'import' method takes the anonymous functions we exported from our models
  // and uses them to instantiate the models in this file.  
  // That's why it was important to list sequelizeConnection and DataTypes as args:
  // without them, import will not work.
  var model = sequelizeConnection.import(path.join(__dirname, file));
  // save the model to our model obj, by the name of the model
  models[model.name] = model;
});




// OUR belongsToMany RELATION
// ====================================
// belongsToManys get defined both ways
models.User.belongsToMany(models.Fandom, {through: models.UserFandom})
models.Fandom.belongsToMany(models.User, {through: models.UserFandom})










// Since we've edited this instance of our sequelize connection,
// we want to save it to our model object so we can reference it elsewhere
models.sequelizeConnection = sequelizeConnection;


// export the db
module.exports = models;