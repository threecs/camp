// require mongoose
var mongoose = require('mongoose');

// create a Schema class with mongoose
var Schema = mongoose.Schema;

// make LibrarySchema a Schema
var LibrarySchema = new Schema({
  // name: a unique string
  name: {
    type:String,
    unique:true
  },
  // books is an array that stores ObjectIds.
  // the ref property links these ObjectIds to the Book model.
  // This will let us populate the library with these books, rather than the ids,
  // using Mongoose's populate method. (See the routes in Server.js)
  books: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
  }]
});

// save the Library model using the LibrarySchema
var Library = mongoose.model('Library', LibrarySchema);

// export the Library model
module.exports = Library;
