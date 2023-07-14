const {createReadStream} = require('fs');

const stream = createReadStream('../content/big.txt',{ highWaterMark: 90000, encoding: 'utf-8' });

// buffer size is 64kbs



stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})