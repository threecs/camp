// Employee Model
// -/-/-/-/-/-/-


// DEPENDENCY
// ==========
// just Sequelize
var Sequelize = require("sequelize");

// SOLUTION
// ========

// We prepare our Employee model just like every other
module.exports = function(sequelizeConnection, DataTypes){
	// now, we create a model to represent our employees table
	var UserFandom = sequelizeConnection.define('UserFandom', {
		// our primary id
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
	})

	// return the Class, effectively exporting it
	return UserFandom;
}