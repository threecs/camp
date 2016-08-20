/* Custom Methods (18.3.04)
 * ===================================== */

// require mongoose
var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

// instantiate a new Schema, UserSchema
var UserSchema = new Schema({
  // username: a required, trimmed string
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  // password: a required, trimmed string that's 6 chars or longer
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
  // email: a string that's checked with regex to ensure it's in the expected format
  email: {
    type: String,
    unique:true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },
  // userCreated: just the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // isCool: true or false value
  isCool: Boolean
});


/* CUSTOM METHODS HERE
 * -/-/-/-/-/-/-/-/-/- */

/* Custom Method Format
    UserSchema.methods.[METHOD NAME HERE ] = function() {
      // the method's processes go here
    }; */

// custom method coolifier
UserSchema.methods.coolifier = function(){
  // just concatenate "...theCoolest" to the current username
  this.username = this.username + '...the Coolest!';
  // return the new name
  return this.username;
};

// custom method makeCool
UserSchema.methods.makeCool = function(){
  // make the "isCool" property of the current doc equal to the boolean "true"
  this.isCool = true;
  // return the new boolean value
  return this.isCool;
};

// pass the schema to the User model
var User = mongoose.model('User', UserSchema);

// export the User model
module.exports = User;
