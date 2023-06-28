// const fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// const fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('opened!');
// });

// q: how do I print the contents of the file to the console?
// a: use the fs.readFile() method:
const fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' add this text 1', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
//   });

// fs.writeFile('mynewfile1.txt', 'Replace with this.', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });

// fs.readFile('mynewfile1.txt', 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// fs.unlink('mynewfile3.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

fs.rename('mynewfile2.txt', 'myrenamedfileRENAMED.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });