// Store Model
// -/-/-/-/-/-/-




// We start out by exporting an anonymous function for index.js to run.
// This function basically gives index.js the instructions for creating the model.
// Index.js will pass sequelizeConnection and DataTypes into the function.
// This basically let's us instantiate the model in index.js.
module.exports = function(sequelizeConnection, DataTypes){
	var Store = sequelizeConnection.define('Store', {
		// id is the auto-incrementing primary id (an int)
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// storeZip is also an integer, and it represents the zip code of the store
		storeZip: {
			type: DataTypes.INTEGER,
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
	return Store;
}
