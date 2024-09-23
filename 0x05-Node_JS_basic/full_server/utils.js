const fs = require('fs');

function readDatabase(fileLocation) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileLocation, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot open database'));
      } else {
        const dataListInitial = data.split('\n');
        const numFields = dataListInitial[0].split(',').length;
        const dataList = dataListInitial.filter((row, index) => row.split(',').length === numFields && index > 0);
        const fieldObject = {};

        for (const row of dataList) {
          const arrayRow = row.split(',');
          const field = arrayRow[arrayRow.length - 1];
          const studentName = arrayRow[0];
          if (fieldObject[field]) {
            fieldObject[field].push(studentName);
            // console.log(2);
          } else {
            const tempArray = [];
            tempArray.push(studentName);
            fieldObject[field] = tempArray;
          }
        }
        // console.log(fieldObject);
        resolve(fieldObject);
      }
    });
  });
}

module.exports = readDatabase;
export default readDatabase;
