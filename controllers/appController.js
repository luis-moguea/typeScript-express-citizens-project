"use strict";
exports.__esModule = true;
exports.controller = void 0;
var data_1 = require("../models/data");
exports.controller = {
    getCitizens: function (req, res) {
        res.send(data_1.citizens);
    },
    getCitizen: function (req, res) {
        var citizenFilter = data_1.citizens.find(function (el) { return el.id === parseInt(req.params.id); });
        if (!citizenFilter) {
            return res.status(400).send("Citizen does not exist");
        }
        res.send(citizenFilter);
    }
};
