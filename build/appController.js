"use strict";
exports.__esModule = true;
exports.controller = void 0;
var citizens = require("../models/data.ts");
exports.controller = {
    getCitizens: function (req, res) {
        res.send(citizens);
    }
};
