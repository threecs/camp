// User Model
// -/-/-/-/-/-/-

// We start out by exporting an anonymous function for index.js to run.
// This function defines instructions for instantiating the model.
// Index.js will then use sequelize's 'import' method to reference the model.
// NOTE: .import needs two args representing sequelizeConnection and DataTypes.
// This args are defined when .import runs this function.
module.exports = function(sequelize, DataTypes){
  // Now, we define our user model for our users table
  var User = sequelize.define('User', {
    // we save a primary id as an auto-incrementing int.
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // the only other field is the user's full name
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      notNull: true
    }
  },{
    classMethods:{
      // User Association
      associate: function(models) {
        // Belongs to Many Fandoms
        User.belongsToMany(models.Fandom, {through: models.UserFandom});
      }
    }
  })

  // Finally, we return the user model to the Module, effectively exporting it
  return User;
}
