// Store Model
// -/-/-/-/-/-/-


// DEPENDENCY
// ==========
// just Sequelize
var Sequelize = require("sequelize");


// We start out by exporting an anonymous function for index.js to run.
// This function basically gives index.js the instructions for creating the model.
// Index.js will pass sequelizeConnection and DataTypes into the function.
// This basically let's us instantiate the model in index.js.
module.exports = function(sequelizeConnection, DataTypes){
	// now, we create a model to represent our Uniform table
	var Uniform = sequelizeConnection.define('Uniform', {
		// our primary id
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// the color of the uniform, as a string
		color: {
			type: Sequelize.STRING,
		},
		// an arbitrary uniform number
		uniformNum: {
			type: Sequelize.INTEGER,
		}
	})

	// return the Class, effectively exporting it
	return Uniform;
}