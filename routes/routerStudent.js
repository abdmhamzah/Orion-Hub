const router = require('express').Router()
const StudentsControllers = require('../controllers/controllerStudents')

router.get('/', StudentsControllers.get)

//Menambahkan students
router.get('/add', StudentsControllers.addForm)
router.post('/add', StudentsControllers.addBuddy)

//Edit students
router.get('/edit/:id', StudentsControllers.editForm)
router.post('/edit/:id', StudentsControllers.updateBuddy)

//Delete students
router.get('/delete/:id', StudentsControllers.dell)

module.exports = router