"use strict";
const express = require("express");
const artShopRouter = express.Router();

artShopRouter.get('/', function(req, res, next){
    res.render("artShop");
});

module.exports = artShopRouter;