const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.write('Hello');
  res.end();
});

server.listen(8080);

// event emmiter
// server
// clusters
