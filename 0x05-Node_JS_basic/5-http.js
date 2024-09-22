const http = require('http');
const fs = require('fs');
const countStudents = require('./2-read_file');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    // res.write(countStudents('database.csv'));

    fs.readFile(process.argv[2], 'utf8', (err, data) => {
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
      res.write(`Number of students: ${newList.length}\n`);
      for (const [key, value] of trackFreq) {
        res.write(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`);
      }
      res.end();
    });
  }
});

app.listen(1245, () => {
  console.log('Server is Running!');
});

module.exports = app;
