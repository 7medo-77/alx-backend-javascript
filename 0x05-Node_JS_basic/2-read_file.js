const fs = require('node:fs');

function countStudents(fileLocation) {
  fs.readFile(fileLocation, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      const dataList = data.split('\n');
      const newList = dataList.slice(1, dataList.length - 1);
      const trackFreq = new Map();
      console.log(newList);

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
        console.log(`Number of Students in ${key}: ${value.length}: List: ${value.join(' ')}`);
      }
    }
  });
}
module.exports = countStudents;
