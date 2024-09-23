const express = require('express')
const { getAllPersons, getPersonById, addPerson, updatePerson, deletePerson } = require('../controllers/personControllers')
const router = express.Router()

router.get('/',getAllPersons)
router.get('/:personId',getPersonById)
router.post('/',addPerson)
router.patch('/:personId',updatePerson)
router.delete('/:personId',deletePerson)  

module.exports = router