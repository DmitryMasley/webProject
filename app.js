/**
 * Created by dmasley on 6/1/16.
 */
var express = require('express');

// routers
var mainRouter = require("./routes/main");
var app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.use("", mainRouter);
app.listen(8082, function () {
    console.log('Listening to port: 8082');
});