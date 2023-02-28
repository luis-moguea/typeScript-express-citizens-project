"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var appController_1 = require("../controllers/appController");
exports.router = (0, express_1.Router)();
exports.router.get("/api/citizens", appController_1.controller.getCitizens);
exports.router.get("/api/citizens/:id", appController_1.controller.getCitizen);
console.log(exports.router);
