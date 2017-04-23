/**
 * Created by dmasley on 6/1/16.
 */
"use strict";
var express = require("express");
var mainRouter = express.Router();

mainRouter.get('/todo', function(req, res, next){
    res.render("index");
});
mainRouter.get('/counter', function(req, res, next){
    res.render("index");
});
module.exports = mainRouter;