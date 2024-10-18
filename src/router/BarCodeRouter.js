const express = require('express')

const router = express.Router()

// TODO: Handle routes from here
router.get('/test', (req, res) => {
  res.send('Bar code test')
})

module.exports = router
