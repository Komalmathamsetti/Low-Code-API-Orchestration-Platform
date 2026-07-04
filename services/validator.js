const Joi = require("joi");
function buildSchema(validationConfig){
    const schemaDefinition = {};
    Object.keys(validationConfig).forEach((field)=>{
        const rules = validationConfig[field];
        let joiField;
        switch(rules.type){
            case "string":
                joiField = Joi.string();
                break;
            case "number":
                joiField = Joi.number();
                break;
            case "boolean":
                joiField = Joi.boolean();
                break;  
            default:
                joiField = Joi.any();
        }
        if(rules.required){
          joiField = joiField.required();
        }
        schemaDefinition[field] = joiField;
    });
    return Joi.object(schemaDefinition);
}
function validateRequest(validationConfig, requestBody) {
    const schema = buildSchema(validationConfig);
    return schema.validate(requestBody);
}
module.exports = { validateRequest };