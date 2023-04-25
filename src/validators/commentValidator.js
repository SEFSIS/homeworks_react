import Joi from "joi";

const commentValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки букви від 1 до 20 символів'
    }),
    postId:Joi.number().min(1).max(100).required(),

    body:Joi.string().required(),

    email:Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.pattern.base':'Приклад:asdewde@gmail.com'
    }),
})

export {
    commentValidator
}