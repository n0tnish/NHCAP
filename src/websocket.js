const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('WebSocket Server');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    ws.send(`Received: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

server.listen(9000, () => {
  console.log('WebSocket server listening on port 9000');
});