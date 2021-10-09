const EventEmitter = require('events');
const uuid = require('uuid');
const fns = require('./functions.js');


class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg});
  }
}

const logger = new Logger();

logger.on('message', data => {
  data = fns.objToString(data); // converting object into string for appending in file.
  // data = JSON.stringify(data); // One more way to Do but different
  data = `\n${data}` // next line
  
  fns.appendFile( data);
});

logger.log('Hello');
logger.log('World');
logger.log('Hi');