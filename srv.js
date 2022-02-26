// import express from "express";
const express = require("express");

const app = express();
var myLogger = function (req, res, next) {

    const { url, path: routePath }  = req ;
    console.log( 'LOGGER - IP ('+ req.socket.remoteAddress+') URL (' + url + '), PATH (' + routePath + ').' ) ;

    next() ;
}
  
app.use(myLogger) ;
  
app.use(express.static("static"));

app.listen(80);