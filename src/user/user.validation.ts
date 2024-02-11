import * as joi from "joi";

export const userValidation = {
  signUp: {
    body: joi.object({
      email: joi.string().email(),
      password: joi.string().min(5),
    }),
  },
};
