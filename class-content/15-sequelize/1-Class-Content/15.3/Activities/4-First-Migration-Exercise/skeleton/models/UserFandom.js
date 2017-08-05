// User Fandom
// -/-/-/-/-/-/-


// We prepare our userFandom model just like every other
module.exports = function(sequelize, DataTypes){
	// now, we create a model to represent our UserFandom table
	var UserFandom = sequelize.define('UserFandom', {
		// our primary id
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
	})

	// return the Class, effectively exporting it
	return UserFandom;
}