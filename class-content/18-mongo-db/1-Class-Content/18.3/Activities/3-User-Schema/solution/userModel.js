/* Mongoose Example (Solution) (18.3.03)
 * ===================================== */ 

// dependency
var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

// instantiate a userSchema object with the Schema class we just made
var UserSchema = new Schema({
  // username is a string. We will trim any trailing whitespace. And it's required.
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  // password is a string. We will trim any trailing whitespace. It's also required.
  // It has a custom validate function that checks the length of the input.
  // If it's less than six chars, mongoose will throw an error.
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
  // email is a string, and it must be a unique one in our collection.
  // notice how it must match our regex, which checks for email.
  email: {
    type: String,
    unique:true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },
  // this will make a userCreated entry in our doc, by default the current timestring.
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// create the "User" model with our UserSchema schema
var User = mongoose.model('User', UserSchema);

// export the User model, so it can be used in server.js with a require.
module.exports = User;

