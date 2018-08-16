'use strict'
const http = require('http');
const express = require('express');
const debug = require('debug')('nodestr:server');

const app = require('../src/app');
const port = 3000;

app.set('port', port);
const server = http.createServer(app);
const router = express.Router();

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

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
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

console.log(`Ouvindo servidor na porta ${port}`);
console.log('Teste');