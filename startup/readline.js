const readIn = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readIn.question('Enter name please: ', name => {
    console.log(`Welcome ${name}!`);
    readIn.close();
});
  