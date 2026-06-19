import Joi from "joi";

export const user_schema = Joi.object({
  username: Joi.string().alphanum().max(20).min(3).required(),
  // id: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().max(100).email().required(),
  password: Joi.string().alphanum().min(8).max(15).required(), 
  age: Joi.number().max(100).min(18),
  gender: Joi.string().valid("male", "female"),
});
