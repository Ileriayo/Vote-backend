const {createUser,illegibleUser,registerUser} = require('../controller/Authcontrol')
const {validateUser,validate} = require('../middleware/AuthMiddleware')

const router = require('express').Router()

router.post('/create',validateUser,validate,illegibleUser)
router.post('/register',registerUser)
// router.post('/create',illegibleUser)

module.exports = router