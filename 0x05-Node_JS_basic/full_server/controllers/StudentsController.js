const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const FILENAME = '../database.csv';
    readDatabase(FILENAME)
      .then((fieldStudents) => {
        const outputField = [];
        outputField.push('This is a list of our students');
        // console.log(fieldStudents);
        // console.log(Object.keys(fieldStudents));

        for (const field of Object.keys(fieldStudents).sort()) {
          const studentNames = fieldStudents[field].join(', ');
          outputField.push(`Number of students in ${field}: ${fieldStudents[field].length}. List: ${studentNames}`);
        }
        response.send(`${outputField.join('\n')}`);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const FILENAME = '../database.csv';
    const { major } = request.params;
    const acceptedPaths = ['CS', 'SWE'];
    // console.log(major);
    if (acceptedPaths.includes(major)) {
      readDatabase(FILENAME)
        .then((fieldStudents) => {
          const studentNames = fieldStudents[major].join(', ');
          response.send(`List: ${studentNames}`);
        })
        .catch((err) => {
          response.status(500).send(err.message);
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
export default StudentsController;
