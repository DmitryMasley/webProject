"use strict";
var express = require("express");
var mainRouter = express.Router();

mainRouter.get('/todo', function(req, res, next){
    res.render("index");
});
mainRouter.get('/todo/:id', function(req, res, next){
    res.render("index");
});
mainRouter.get('/counter', function(req, res, next){
    res.render("index");
});
module.exports = mainRouter;