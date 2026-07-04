const Joi = require("joi");
const configSchema = Joi.object({
    name:Joi.string().required(),
    route:Joi.string().pattern(/^\/.*/).required(),
    method:Joi.string().valid("GET","POST","PUT","DELETE").required(),
    validation:Joi.object().required(),
    vendor:Joi.object({
        url:Joi.string().uri().required(),
        method:Joi.string().valid("GET","POST","PUT","DELETE").required(),
        headers:Joi.object().optional()
    }).required(),
    workflow: Joi.array().items(
    Joi.object({
        name: Joi.string().required(),
        enabled: Joi.boolean().required(),
        condition: Joi.string().optional(),
        vendor: Joi.object({
            url: Joi.string().uri().required(),
            method: Joi.string()
                .valid("GET", "POST", "PUT", "DELETE")
                .required()
        }).required()
    })).optional(),
    requestMapping: Joi.object().required(),
    responseMapping: Joi.object().required()
});
module.exports = configSchema;