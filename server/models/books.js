// book.js Angela Liu 300714839 COMP308-W2017-MIDTERMPROJECT-Favourite Book List require modules for books Model
let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
