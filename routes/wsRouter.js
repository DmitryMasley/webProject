var express = require("express");
var wsRouter = express.Router();

wsRouter.ws("/", (ws, req)=>{
    ws.on("message", (msg)=>{

    })
});
module.exports = wsRouter;