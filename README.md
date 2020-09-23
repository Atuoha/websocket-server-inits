# websocket-server-inits
Tiny WebSocketServer Implementation
-Node -WebSocket


ws: a Node.js WebSocket library
Version npm Build Windows x86 Build Coverage Status

ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.

Passes the quite extensive Autobahn test suite: server, client.

Note: This module does not work in the browser. The client in the docs is a reference to a back end with the role of a client in the WebSocket communication. Browser clients must use the native WebSocket object. To make the same code work seamlessly on Node.js and the browser, you can use one of the many wrappers available on npm, like isomorphic-ws.


#Simple server
const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});


#Sending data
const WebSocket = require('ws');
 
const ws = new WebSocket('ws://www.host.com/path');
 
ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});
