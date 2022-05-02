const express = require('express')
const router = express.Router()

router.get('https://full-stack-app-mybrary.herokuapp.com/', (req, res) => {
  res.render('index')
})

module.exports = router
