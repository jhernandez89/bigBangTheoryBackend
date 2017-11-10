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