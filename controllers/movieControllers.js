const Movie = require("../models/movieModel")

const getAllMovies=async(req, res) => {
  console.log(req.query)
  const movies=await Movie.find(req.query).populate('genre');
  res.json(movies)
  }

const getMoviesById= async(req, res) => {
  const movie=await Movie.findById(req.params.movieId).populate('genre').exec();
  res.json(movie)   
}

const addMovie=async (req, res) => {
    const data=req.
    body
    const movie=new Movie(data)
    await movie.save()
    res.json(movie)
  }

const updateMovie= async(req, res) => {
  const updatedMovie=await Movie.findByIdAndUpdate(req.params.movieId, req.body, {new: true}) 
  res.json(updatedMovie)
  }

const deleteMovie= async(req, res) => {
  await Movie.findByIdAndDelete(req.params.movieId)
  res.send("Deleted")
  }

module.exports={getAllMovies,getMoviesById,addMovie,updateMovie,deleteMovie}  

