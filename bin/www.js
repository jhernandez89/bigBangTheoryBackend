let app = require('../app');
let debug = require('debug')('nerdom server');
let http = require('http');
var port = normalizePort(process.env.PORT || '3000');

app.set('port', port);
let server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(value) {
  let port = parseInt(value, 10)

  if(isNaN(port)) return value;
  if(port >=0 ) return port;

  return false;
}

function onError(error) {
  if(error.syscall !== 'listen') throw error;

  var bind = typeof port === 'string'
  ? 'Pipe ' + port
  : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
