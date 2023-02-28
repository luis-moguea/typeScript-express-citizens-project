"use strict";
exports.__esModule = true;
exports.validateCitizen = void 0;
var Joi = require("joi");
var validateCitizen = function (citizens) {
    var schema = Joi.object({
        name: Joi.string().min(3).required(),
        nationality: Joi.string().required()
    });
    return schema.validate(citizens);
};
exports.validateCitizen = validateCitizen;
