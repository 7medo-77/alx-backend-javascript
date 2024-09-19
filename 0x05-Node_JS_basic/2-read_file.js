const fs = require('node:fs');

function countStudents(fileLocation) {
  try {
    const data = fs.readFileSync(fileLocation, 'utf8');
    const dataList = data.split('\n');
    const newList = dataList.filter((row, index) => {
      const recordLength = dataList[0].split(',').length;
      if (index !== 0 && row.split(',').length === recordLength) {
        return row;
      }
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
    console.log(`Number of students: ${newList.length}`);
    for (const [key, value] of trackFreq) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

// const fs = require('fs');
//
// function countStudents(fileName) {
//   const students = {};
//   const fields = {};
//   let length = 0;
//   try {
//     const content = fs.readFileSync(fileName, 'utf-8');
//     const lines = content.toString().split('\n');
//     for (let i = 0; i < lines.length; i += 1) {
//       if (lines[i]) {
//         length += 1;
//         const field = lines[i].toString().split(',');
//         if (Object.prototype.hasOwnProperty.call(students, field[3])) {
//           students[field[3]].push(field[0]);
//         } else {
//           students[field[3]] = [field[0]];
//         }
//         if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
//           fields[field[3]] += 1;
//         } else {
//           fields[field[3]] = 1;
//         }
//       }
//     }
//     const l = length - 1;
//     console.log(`Number of students: ${l}`);
//     for (const [key, value] of Object.entries(fields)) {
//       if (key !== 'field') {
//         console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
//       }
//     }
//   } catch (error) {
//     throw Error('Cannot load the database');
//   }
// }
//
// module.exports = countStudents;
