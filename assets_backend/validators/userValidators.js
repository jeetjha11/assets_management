const joi = require('joi');

const ValidateUserData = (req, res, next) => {
    const UserSchema = joi.object({
        username: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required().max(20),
        gender: joi.string().valid('male', 'female').required(),
        dob: joi.date().required(),
        phone: joi.string().required()
    })
    const { error, value } = UserSchema.validate(req.body)

    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    next()
}

const ValidateLoginData = (req, res, next) => {
    const UserSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required().max(20)
    })
    const { error, value } = UserSchema.validate(req.body)

    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    next()
    
}




module.exports = { ValidateUserData, ValidateLoginData }
