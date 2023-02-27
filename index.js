"use strict";
exports.__esModule = true;
var express = require("express");
var appRoute_1 = require("./routes/appRoute");
//import { router } from "./routes/appRoute"
var app = express();
//app.use(express.json())
app.use("/", appRoute_1.router);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Listening on port ".concat(port, "..."));
});