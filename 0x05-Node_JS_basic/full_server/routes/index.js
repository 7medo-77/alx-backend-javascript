import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentsController';

const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

route.get('/students', (req, res) => {
  StudentController.getAllStudents(req, res);
});

route.get('/students/:major', (req, res) => {
  StudentController.getAllStudentsByMajor(req, res);
});

export { route, express };
