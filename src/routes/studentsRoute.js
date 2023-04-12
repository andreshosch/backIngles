const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/studentsMongo');

// api/productos
router.post('/', alumnoController.createStudent);
router.get('/', alumnoController.getStudents);
router.put('/:id', alumnoController.updateStudents);
router.get('/:id', alumnoController.getStudentById);
router.delete('/:id', alumnoController.deleteStudents);



module.exports = { router }