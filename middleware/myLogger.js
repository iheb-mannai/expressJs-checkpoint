var express = require('express');


myLogger = function (req, res, next) {
    req.requestTime = Date().toString();
    console.log('LOGGED at ' + req.requestTime);
    next();
};


module.exports = myLogger ;