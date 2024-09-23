const Genre = require("../models/genreModel")

const getAllGenres= async(req, res) => {
  const genres=await Genre.find({});
    res.json(genres)
  }

const getGenreById= async(req, res) => {
  const genre=await Genre.findById(req.params.genreId).exec();
  res.json(genre)
  }

const addGenre= async(req, res) => {
  const data=req.body
  const genre=new Genre(data)
  await genre.save()
  res.json(genre)
  }

const updateGenre= async(req, res) => {
  const updatedGenre=await Genre.findByIdAndUpdate(req.params.genreId, req.body, {new: true}) 
  res.json(updatedGenre)
  }

const deleteGenre= async(req, res) => {
    await Genre.findByIdAndDelete(req.params.genreId)
    res.send("Deleted")
  }

module.exports={getAllGenres,getGenreById,addGenre,updateGenre,deleteGenre}  