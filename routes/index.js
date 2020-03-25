const router = require('express').Router()

router.get('/', (req, res) => res.send('Hello World!'))

router.get('/students')
router.get('/buddies')
router.get('/challenges')

module.exports = router