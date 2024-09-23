const express = require('express')
const movieRouter = require('./genreRoutes')
const { getAllMovies, getMoviesById, addMovie, updateMovie, deleteMovie } = require('../controllers/movieControllers')
const router = express.Router()

router.get('/',getAllMovies )
router.get('/:movieId',getMoviesById)
router.post('/',addMovie )
router.patch('/:movieId',updateMovie)
router.delete('/:movieId',deleteMovie)  

module.exports = router