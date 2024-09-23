const express = require('express')
const { getAllCasts, getCastById, addCast, updateCast, deleteCast } = require('../controllers/castControllers')

const router = express.Router()

router.get('/',getAllCasts)
router.get('/:castId',getCastById)
router.post('/',addCast)
router.patch('/:castId',updateCast)
router.delete('/:castId',deleteCast)  

module.exports = router