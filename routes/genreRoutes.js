const express = require('express')
const movieRouter = require('./genreRoutes')
const { getAllGenres, getGenreById, addGenre, updateGenre, deleteGenre } = require('../controllers/genreControllers')
const router = express.Router()
router.get('/',getAllGenres)
router.get('/:genreId',getGenreById )
router.post('/',addGenre)
router.patch('/:genreId',updateGenre)
router.delete('/:genreId',deleteGenre) 

module.exports = router