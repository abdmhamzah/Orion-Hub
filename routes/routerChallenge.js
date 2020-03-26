const router = require('express').Router()
const ControllerChallenge = require('../controllers/controllerChallenge')

// router.get('/', (req, res) => res.send('ini di Challenge'))
router.get('/', ControllerChallenge.findAll)

module.exports = router