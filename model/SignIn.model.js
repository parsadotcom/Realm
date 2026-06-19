import Joi from "joi";

export const signin_schema = Joi.object({
  email: Joi.string().max(100).email().required(),
  password: Joi.string().alphanum().min(8).max(15).required(),
});