const router = require('express').Router()

const routerStudent = require('./routerStudent')
const routerBuddy = require('./routerBuddy')
const routerChallenge = require('./routerChallenge')

router.get('/', (req, res) => res.render('home'))

router.use('/students', routerStudent)
router.use('/buddies', routerBuddy)
router.use('/challenges', routerChallenge)

module.exports = router