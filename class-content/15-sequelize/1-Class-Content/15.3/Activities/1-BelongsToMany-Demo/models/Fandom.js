// Fandom Model
// -/-/-/-/-/-/-

// We start out by exporting an anonymous function for index.js to run.
// This function basically gives index.js the instructions for creating the model.
// Index.js will pass sequelizeConnection and DataTypes into the function.
// This basically let's us instantiate the model in index.js.
module.exports = function(sequelize, DataTypes){
	var Fandom = sequelize.define('Fandom', {
		// id is the auto-incrementing primary id (an int)
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// the fandom is a string
		fandom: {
			type: DataTypes.STRING
		}
	}, {
		classMethods:{
			associate: function(models) {
	      	// BelongsToMany
	      	Fandom.belongsToMany(models.User, {through: models.UserFandom});
	      }
	    }
	})

	// Finally, we return the Fandom model to the Module, effectively exporting it
	return Fandom;
}