const EventEmitter = require('events');
const logEvent = require('./logEvent');

class MyEmitter extends EventEmitter {}

const myEvent = new MyEmitter();

myEvent.on('log', (msg) => logEvent(msg));

for(let i = 0; i < 10; i++) {
    setTimeout(() => {
        myEvent.emit('log', `Event ${i}`)
    }, 2000);
}

