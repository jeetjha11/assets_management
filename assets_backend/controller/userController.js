const UserModel = require('../models/userModel')

const bcrypt = require('bcrypt')
const { create_jwt } = require('../util/helper')
const userRoutes = require('../routes/userRoutes')

module.exports = {
    register: async (req, res) => {
        const userModel = new UserModel(req.body)
        console.log(req.body.password);
        userModel.password = await bcrypt.hash(req.body.password, 10)
        try {
            const user = await userModel.save()

            res.status(201).json({
                "message": "User Registered Successfully",
                "data": user
            })
        }
        catch (error) {
            res.status(500).json({
                "message": "Internal Server Error",
                "error": error
            })
        }

    },
    login: async (req, res) => {
        const { email, password } = req.body
        try {
            const user = await UserModel.findOne({ email: email })
            if (!user) {
                res.status(404).json({
                    "message": "User Not Found"
                })
            }
            else {
                const isMatch = await bcrypt.compare(password, user.password)
                if (isMatch) {
                    user.password=null
                    const token = create_jwt(user)
                    res.status(200).json({
                        "message": "User Logged In Successfully",
                        "user_name":user.username,
                        "token": token
                    })
                }
                else {
                    res.status(401).json({
                        "message": "Invalid Credentials"
                    })
                }
            }
        }
        catch (error) {
            res.status(500).json({
                "message": "Internal Server Error",
                "error": error
            })
        }
    }
}