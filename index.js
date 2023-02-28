"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv = require("dotenv").config();
var appRoute_1 = require("./routes/appRoute");
var app = express();
app.use("/", appRoute_1.router);
var port = process.env.PORT;
app.listen(port, function () {
    console.log("Listening on port ".concat(port, "..."));
});
