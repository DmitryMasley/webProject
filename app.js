/**
 * Created by dmasley on 6/1/16.
 */
var express = require('express');
var net = require("net");
var app = express();
var expressWs = require('express-ws')(app);
let passport = require("passport");

// routers
var mainRouter = require("./routes/main");
var wsRouter = require("./routes/wsRouter");

app.use(express.static('public'));
app.set("view engine", "ejs");

var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

app.use("", mainRouter);
app.use("", wsRouter);

var server = net.createServer();
server.listen("127.0.0.1", 6969);
server.on("connection", (socket)=>{
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

    socket.on("data", ()=>{

    })
});

app.listen(8082, function () {
    console.log('Listening to port: 8082');
});