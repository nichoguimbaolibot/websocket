var Stomp = require('stompjs');
var express = require("express");
var app = express();

var client = Stomp.overWS('ws://localhost:3002');
var client1 = Stomp.overTCP('localhost', 3002);

app.get("/", function(){
    console.log(client);
    console.log("Client1: " + client1);
});


app.listen(8000, function(){
    console.log("Server is starting at port 8000")
});