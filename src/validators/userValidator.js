import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки букви від 1 до 20 символів'
    }),
    username:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки букви від 1 до 20 символів'
    }),
    email:Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.pattern.base':'Приклад:asdewde@gmail.com'
    }),
    })

export {
    userValidator
}

