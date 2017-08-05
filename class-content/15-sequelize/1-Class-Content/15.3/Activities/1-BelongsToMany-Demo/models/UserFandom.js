// UserFandom Model
// -/-/-/-/-/-/-


// We prepare our userFandom model just like every other
module.exports = function(sequelize, DataTypes){
	// now, we create a model to represent our employees table
	var UserFandom = sequelize.define('UserFandom', {
		// our primary id
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		}
	}, {
		classMethods:{
			// no associations here,
			associate: function(models) {
				// none whatsoever
			}
		}

	})

	// return the Class, effectively exporting it
	return UserFandom;
}