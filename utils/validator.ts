const Joi = require("joi")

export const validateCitizen = (citizens: {name: string, nationality: string}) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        nationality: Joi.string().required()
    })
    return schema.validate(citizens)
}