const { selected, leaderboard } = require('../controller/Nomineecontrol')

const router = require('express').Router()

router.post('/nominees',selected)
router.get('/leaderboard',leaderboard)

module.exports = router