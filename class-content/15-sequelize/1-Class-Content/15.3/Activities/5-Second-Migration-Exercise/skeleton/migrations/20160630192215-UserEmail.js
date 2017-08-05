// STUDENTS!!//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// If you're still on answer 4, please don't just copy and paste this file.//
// If you do, you're only cheatin' yourself.////////////////////////////////
/////////////////////////////////////////////





// ANSWER PART 1

// this migration file will edit our users table.
// it will create an email column, 
// and rename the username column to user

// NOTE: This will NOT replace all references to "username" with "user"
// in our model, routes, and server.js, nor will it create our email field.
// We must do that manually



module.exports = {
  // migration
  up: function (queryInterface, Sequelize) {
    // add an email column, do not allow null
    return queryInterface.addColumn(
      'users',
      'email',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
    )
  },

  // revert migration
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'email');
  }
};