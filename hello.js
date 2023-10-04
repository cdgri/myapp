var http = require('http');
var content = function(req, resp) {
	resp.end("Hello dwkim" + "\n");
	resp.writeHead(200);
}
var sv = http.createServer(content);
sv.listen(8000);

