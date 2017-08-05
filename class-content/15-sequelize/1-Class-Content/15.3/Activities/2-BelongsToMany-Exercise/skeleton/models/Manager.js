// Manager Model
// -/-/-/-/-/-/-


// We start out by exporting an anonymous function for index.js to run.
// This function defines instructions for instantiating the model.
// Index.js will then use sequelize's 'import' method to reference the model.
// NOTE: .import needs two args representing sequelizeConnection and DataTypes.
// This args are defined when .import runs this function.
module.exports = function(sequelizeConnection, DataTypes){
	// Now, we define our Manager model for our managers table
	var Manager = sequelizeConnection.define('Manager', {
		// we save a primary id as an auto-incrementing int.
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// the only other field is the manager's full name
		fullName: {
			type: DataTypes.STRING,
		}
	}, {
		classMethods:{
			// Manager Association
			associate: function(models) {
      	// TODO: BelongsToMany
      	// ===================
			}
		}
	})

	// Finally, we return the Manager model to the Module, effectively exporting it
	return Manager;
}

