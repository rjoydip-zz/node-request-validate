var Joi = require('joi')

module.exports = () => {
    return (req, res, next) => {
        const { error, value } = Joi.validate(req.body, Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required(),
            birthyear: Joi.number(),
            email: Joi.string().required()
        }));
        if(error) {
            next(error);
        } else {
            next();
        }
    }
}