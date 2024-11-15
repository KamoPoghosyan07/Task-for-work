import Joi from "joi";

const productsValidator = Joi.object({
    PLU : Joi.number().min(6).max(6),
    product_name : Joi.string(),
    created_at : Joi.date()
});

const stocksValidator = Joi.object({
    PLU : Joi.number().min(6).max(6),
    quantity_of_shelf : Joi.number(),
    quantity_of_order : Joi.number(),
    shop_name : Joi.string(),
    created_at : Joi.date()
});

const stocksUpdateValidator = Joi.object({
    PLU : Joi.number().min(6).max(6),
    quantity_of_shelf : Joi.number(),
    quantity_of_order : Joi.number(),
    updated_at : Joi.date()
})

export default { productsValidator, stocksValidator, stocksUpdateValidator }