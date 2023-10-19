var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  if (req.url == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  setInterval(function() {
    var currentTime = new Date();
    var timeString = currentTime.toLocaleTimeString();
    socket.emit('time', timeString);
  }, 1000);
});

server.listen(8000, function() {
  console.log('listening on *:8000');
});
