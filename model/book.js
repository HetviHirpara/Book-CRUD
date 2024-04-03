const mongoose = require('mongoose');


const bookschema = mongoose.Schema({
    text : String,
    author :String,
    no : String

});

module.exports = mongoose.model('books' , bookschema);