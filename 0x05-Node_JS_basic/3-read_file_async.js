const fs = require('node:fs/promises');

function countStudents(fileLocation) {
  const readfilePromise = fs.readFile(fileLocation, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
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
  });
  return readfilePromise;
}

module.exports = countStudents;
