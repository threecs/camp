/* Custom Methods (Solution) (18.3.5)
 * The Model
 * ===================================== */

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


/* Custom Methods */

// getFullName
UserSchema.methods.getFullName = function(){
  // concatenate the  users first and last name, save it to this.
  this.fullName = this.firstName + " " + this.lastName;
  // return the full name
  return this.fullName;
};

// lastUpdatedDate
UserSchema.methods.lastUpdatedDate = function(){
  // make lastUpdatedDate the ccurrent date
  this.lastUpdated = Date.now();
  // return this new date
  return this.lastUpdated;
};

// use the above schema to make the User model
var User = mongoose.model('User', UserSchema);

// export the model so the server can use it
module.exports = User;
