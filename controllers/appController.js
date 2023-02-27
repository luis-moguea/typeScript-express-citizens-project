"use strict";
exports.__esModule = true;
exports.controller = void 0;
var data_1 = require("../models/data");
exports.controller = {
    getCitizens: function (req, res) {
        res.send(data_1.data);
    }
};
