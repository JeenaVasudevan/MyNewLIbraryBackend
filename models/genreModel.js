const mongoose=require('mongoose')
const genreSchema = new mongoose.Schema({
    title: String
  });
  const Genre = mongoose.model('Genre',genreSchema);
  module.exports=Genre