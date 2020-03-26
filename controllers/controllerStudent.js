const { Buddy, Challenge, Student, StudentChallenge } = require('../models')

class StudentsController {
    static get(req, res) {
        Student.findAll({})
            .then(data => {
                res.render('../students/student', { students: data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addForm(req, res) {
        res.render('../students/addFormStudent.ejs')
    }

    static addStudent(req, res) {
        let newStudent = req.body;
        // res.send(req.body)
        Student.create({
            first_name: Student.first_name,
            last_name: Student.last_name,
            email: Student.email,
            gender: Student.gender,
            birth_date: Student.birth_date
        })
            .then(data => {
                // console.log('Data :', data.fullName());
                res.redirect('/students')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editForm(req, res) {
        console.log('req: ', req.params.id);
        // Student.findByPk(req.params.id, { include: [{ model: ProductionHouse }] })
        Student.findByPk(req.params.id, {})
            .then(data => {
                res.render('../students/editFormStudents.ejs', { students: data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateStudent(req, res) {
        console.log('req: ', req.body);
        let newStudent = req.body;
        Student.update({
            first_name: Student.first_name,
            last_name: Student.last_name,
            email: Student.email,
            gender: Student.gender,
            birth_date: Student.birth_date
        }, {
            where: {
                id: Number(req.params.id)
            }
        })
            .then(data => {
                console.log('data: ', data.fullName());
                res.redirect('/students')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static dell(req, res) {
        Student.destroy({ where: { id: req.params.id } })
            .then(data => {
                res.redirect('/students')
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = StudentsController