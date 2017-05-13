"use strict";
/**
 * Created by dmasley on 6/1/16.
 */
const express = require('express');
const net = require("net");
const app = express();
const expressWs = require('express-ws')(app);
const passport = require("passport");

// routers
const mainRouter = require("./routes/main");
const wsRouter = require("./routes/wsRouter");
const ArtShopRouter = require("./routes/artShop");

app.use(express.static('public'));
app.set("view engine", "ejs");

// var dbConfig = require('./db.js');
// var mongoose = require('mongoose');
// mongoose.connect(dbConfig.url);

app.use("/", mainRouter);
app.use("", wsRouter);
app.use("", ArtShopRouter);

const server = net.createServer();
server.listen(6967);
server.on("connection", (socket)=>{
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

    socket.on("data", ()=>{

    })
});

app.listen(8082, function () {
    console.log('Listening to port: 8082');
});