"use strict";
exports.__esModule = true;
exports.controller = void 0;
var data_1 = require("../models/data");
var validator_1 = require("../utils/validator");
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
    },
    addNewCitizen: function (req, res) {
        var error = (0, validator_1.validateCitizen)(req.body).error;
        if (error) {
            res.status(404).send(error.details[0].message);
        }
        var newCitizen = {
            id: data_1.citizens.length + 1,
            name: req.body.name,
            nationality: req.body.nationality
        };
        data_1.citizens.push(newCitizen);
        res.send(newCitizen);
    },
    updateCitizen: function (req, res) {
        //filter citizens
        var citizenFilter = data_1.citizens.find(function (el) { return el.id === parseInt(req.params.id); });
        if (!citizenFilter) {
            return res.status(400).send("Citizen does not exist");
        }
        //set citizen requirements 
        var result = (0, validator_1.validateCitizen)(req.body);
        if (result.error) {
            res.status(404).send(result.error.details[0].message);
        }
        //update info
        citizenFilter.name = req.body.name;
        citizenFilter.nationality = req.body.nationality;
        res.send(citizenFilter);
    },
    deleteCitizen: function (req, res) {
        var citizenFilter = data_1.citizens.find(function (el) { return el.id === parseInt(req.params.id); });
        if (!citizenFilter) {
            return res.status(400).send("Citizen does not exist");
        }
        var index = data_1.citizens.indexOf(citizenFilter);
        data_1.citizens.splice(index, 1);
        res.send(citizenFilter);
    }
};
