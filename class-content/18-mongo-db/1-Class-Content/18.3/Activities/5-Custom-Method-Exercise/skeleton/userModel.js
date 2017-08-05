/* Custom Methods (Solution) (18.3.5)
 * The Model
 * ===================================== */


/* MODEL INSTRUCTIONS:
 * Scroll below the schema in this file 
 * and create the custom methods we're looking for.
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

// require mongoose
var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

// new Schema: UserSchema
var UserSchema = new Schema({
  // first name: a trimmed, required string
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  // last name: a trimmed, required string
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  // username: a trimmed, required string
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  // password: a trimmed, required string that must be more than 6 chars
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      'Password should be longer.'
    ]
  },
  // email: a string that must match an email format and must be unique in the collection
  email: {
    type: String,
    unique:true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },
  // userCreated: the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // lastUpdated: a date type entry
  lastUpdated: {type: Date},
  // fullName: a string type entry
  fullName: String
});


/* vvv MAKE YOUR CUSTOM METHODS HERE vvv */
/* ===================================== */

// getFullName: concatenate the first and last name 
// and return it


// lastUpdatedDate: save the current date to a variable
// and return it

/* TIP: Custom Method Format
  
  UserSchema.methods.[CUSTOM METHOD NAME HERE] = function() {
    // enter your method code here
  }; 

*/


// use the above schema to make the User model
var User = mongoose.model('User', UserSchema);

// export the model so the server can use it
module.exports = User;
