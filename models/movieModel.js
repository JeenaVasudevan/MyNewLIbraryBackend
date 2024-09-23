const mongoose=require('mongoose')
const movieSchema = new mongoose.Schema({
    title: String,
    thumbnail:String,
    language:String,
    description:String,
    genre:{
        type:mongoose.ObjectId,
        ref:'Genre'
    }
  });
  const Movie = mongoose.model('Movie',movieSchema);
  module.exports=Movie