/* eslint-disable require-jsdoc */
import Joi from 'joi';

function validateUserInput(user) {
  const schema = {
    phoneNumber: Joi.number().required(),
    username: Joi.string()
      .min(5)
      .max(30)
      .required(),
    password: Joi.string()
      .min(6)
      .max(30)
      .required(),
    fullname: Joi.string()
      .min(6)
      .max(30)
      .required(),
    address: Joi.string()
      .min(6)
      .required(),
    email: Joi.string().required()
  };

  return Joi.validate(user, schema);
}

export default validateUserInput;
