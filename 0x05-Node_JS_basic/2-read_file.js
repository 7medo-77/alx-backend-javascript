const fs = require('node:fs');

function countStudents(fileLocation) {
  try {
    const data = fs.readFileSync(fileLocation, 'utf8');
    const dataList = data.split('\n');
    const newList = dataList.slice(1, dataList.length - 1);
    const trackFreq = new Map();

    for (const record of newList) {
      const cellList = record.split(',');
      const firstName = cellList[0];
      const track = cellList[cellList.length - 1];

      if (cellList.length === 0) {
        continue;
      }

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
