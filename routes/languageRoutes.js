const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
router.get('/:languageId', (req, res) => {
    res.send('Hello World!')
  })
router.post('/', (req, res) => {
    res.send('Hello World!')
  })
router.patch('/:languageId', (req, res) => {
    res.send('Hello World!')
  })
router.delete('/:languageId', (req, res) => {
    res.send('Hello World!')
  }) 

module.exports = router