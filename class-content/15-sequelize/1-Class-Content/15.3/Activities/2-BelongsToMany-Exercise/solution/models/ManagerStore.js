// Employee Model
// -/-/-/-/-/-/-

// SOLUTION
// ========

// We prepare our Employee model just like every other
module.exports = function(sequelizeConnection, DataTypes){
	// now, we create a model to represent our employees table
	var ManagerStore = sequelizeConnection.define('ManagerStore', {
		// our primary id
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
	})

	// return the Class, effectively exporting it
	return ManagerStore;
}