const EventEmitter = require('events');
const logEvent = require('./logEvent');

class MyEmitter extends EventEmitter {}

const myEvent = new MyEmitter();

myEvent.on('log', (msg) => logEvent(msg));

async function* events() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

(async () => {
  for await (const num of events()) {
    await new Promise((resolve) =>
      setTimeout(() => {
        myEvent.emit("log", `Event ${num}`);
        console.log("Event logged");
        resolve();
      }, 2000)
    );
  }
})();
