// User Model
// -/-/-/-/-/-/-


// DEPENDENCY
// ==========
// just Sequelize
var Sequelize = require("sequelize");


// We start out by exporting an anonymous function for index.js to run.
// This function defines instructions for instantiating the model.
// Index.js will then use sequelize's 'import' method to reference the model.
// NOTE: .import needs two args representing sequelizeConnection and DataTypes.
// This args are defined when .import runs this function.
module.exports = function(sequelizeConnection, DataTypes){
	// Now, we define our user model for our users table
	var User = sequelizeConnection.define('User', {
		// we save a primary id as an auto-incrementing int.
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// the only other field is the user's full name
		username: {
			type: Sequelize.STRING,
		}
	})

	// Finally, we return the user model to the Module, effectively exporting it
	return User;
}

