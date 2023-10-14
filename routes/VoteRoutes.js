const { getcandidates } = require('../controller/Votecontrol')

const router  = require('express').Router()

router.get('/getcandidate',getcandidates)

module.exports = router