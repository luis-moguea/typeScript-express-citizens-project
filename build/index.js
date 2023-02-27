"use strict";
exports.__esModule = true;
var express = require("express");
//import { router } from "./routes/appRoute"
var app = express();
console.log(app);
//app.use(express.json())
app.get("/", function (req, res) {
    res.send("Typescript + Express");
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Listening on port ".concat(port, "..."));
});
