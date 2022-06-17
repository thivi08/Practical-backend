const express = require('express')
const router = express.Router()

const carousel = require('./carousel/')
router.use('/carousel', carousel)

module.exports = router