var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.get("/", function(req, res){
    res.send("Express works!!");
});

app.get("/tasks", function(req, res){
    fs.readFile("./db.json", function(err, data){
        if(!err) {
            var tasks = JSON.parse(data.toString()).tasks;
            res.send(tasks);
        }
    });
});

server.listen(3000, function() {
    console.log("Server is listening on 3000");
});