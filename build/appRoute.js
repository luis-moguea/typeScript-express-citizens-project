"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var appController_1 = require("../controllers/appController");
exports.router = (0, express_1.Router)();
exports.router.get("/", appController_1.controller.getCitizens);
