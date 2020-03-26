const router = require('express').Router()
const StudentsControllers = require('../controllers/controllerStudent')

router.get('/', StudentsControllers.get)

//Menambahkan students
router.get('/add', StudentsControllers.addForm)
router.post('/add', StudentsControllers.addStudent)

//Edit students
router.get('/edit/:id', StudentsControllers.editForm)
router.post('/edit/:id', StudentsControllers.updateStudent)

//Delete students
router.get('/delete/:id', StudentsControllers.dell)

module.exports = router