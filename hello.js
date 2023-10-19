var http = require('http');
var content = function(req, resp) {
	resp.end("Hello dwkim on VM2" + "\n" + "23.10.19-14:08:00 \n");
	resp.writeHead(200);
}
var sv = http.createServer(content);
sv.listen(8000);

