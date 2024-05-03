const   Joi = require("joi")

const createAdminValidation = async (data) => {
    const schema = Joi.object({
        id: Joi.string(),
        username: Joi.string().min(6).required(),
        full_name: Joi.string().min(6).required(),
        password: Joi.string().min(8).required(),
        repeat_password: Joi.ref("password"),
        permissions: Joi.string().required(),
      }).with("password", "repeat_password");
    
      const validation_result = schema.validate(data);
      return validation_result;
}

module.exports = {
    createAdminValidation : createAdminValidation
}