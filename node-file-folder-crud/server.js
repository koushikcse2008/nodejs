var http = require('http');

var server = http.createServer(function (req, res) {
    res.end('Server started');
});

server.listen(3000, 'localhost', function() {
    console.log("Server runing at: 3000");
});