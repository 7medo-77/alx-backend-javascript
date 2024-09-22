const express = require('express');
const fs = require('fs');

const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  outputString.push('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const fileLocation = process.argv[2] ? process.argv[2] : '';
  const outputString = [];
  outputString.push('This is the list of our students');
  fs.readFile(fileLocation, 'utf8', (err, data) => {
    if (err) {
      outputString.push('Cannot load the database');
      res.send(`${outputString.join('\n')}\n`);
      res.end();
    } else {
      const dataList = data.split('\n');
      const newList = dataList.filter((row, index) => {
        const recordLength = dataList[0].split(',').length;
        return index !== 0 && row.split(',').length === recordLength;
      });

      const trackFreq = new Map();

      for (const record of newList) {
        const cellList = record.split(',');
        const firstName = cellList[0];
        const track = cellList[cellList.length - 1];

        if (trackFreq.has(track)) {
          trackFreq.get(track).push(firstName);
        } else {
          const firstNameArray = [];
          firstNameArray.push(firstName);
          trackFreq.set(track, firstNameArray);
        }
      }
      outputString.push(`Number of students: ${newList.length}`);
      for (const [key, value] of trackFreq) {
        outputString.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      res.send(`${outputString.join('\n')}\n`);
      res.end();
    }
  });
});

app.listen(1245);

module.exports = app;
