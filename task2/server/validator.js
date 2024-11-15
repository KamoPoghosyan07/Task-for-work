import Joi from "joi";

const userValidator = Joi.object({
    name : Joi.string().min(2).max(6),
    surname : Joi.string().min(2).max(10),
    age : Joi.number().max(119),
    problems : Joi.boolean()
})

export default userValidator