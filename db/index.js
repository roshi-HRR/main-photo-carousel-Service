const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });


let photoSchema = mongoose.Schema({ // using mongoose to create a schema
  id: Number,
  photoURL: String,
  description: String
});

let Photo = mongoose.model('Photo', photoSchema);




module.exports = Photo;