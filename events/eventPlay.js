// let fs = require('fs');
// let rs = fs.createReadStream('./mynewfile1.txt');
// rs.on('open', function () {
//     console.log('The file is open');
// });

let events = require('events');

let eventEmitter = new events.EventEmitter();

// create  an event handler
let myEventHandler = function () {
    console.log('I hear a scream!');
}

// assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

// fire the 'scream' event
eventEmitter.emit('scream');
