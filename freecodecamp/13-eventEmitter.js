const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// listening for an event
customEmitter.on('response', (name,id) => {
    console.log(`data received user ${name} with id:${id}`);
})


// can have as many as you want
customEmitter.on('response', (name,id) => {
    console.log(`some other thing ${name} with id:${id}`);
})

customEmitter.emit('response','john',22);   // trigging event