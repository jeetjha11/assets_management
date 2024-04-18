const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const jwtSecret = process.env.JWT_SECRET;



const IsAuthenticated = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];


        req.token = bearerToken;
        jwt.verify(req.token, jwtSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Not authorized" })
            } else if (decodedToken['payload'].role === process.env.USER_ROLE_ID || decodedToken['payload'].role === process.env.ADMIN_ROLE_ID) {
                const userData = User.findById({ _id: decodedToken['payload']._id, status_id: { $nin: [2] } });
                if (userData) {
                    next();
                }
                else {
                    return res.status(403).json({ message: "Invalid User!!!!" })
                }

            }
            else {
                return res.status(403).json({ message: "Not authorized" })
            }
        });
    } else {
        res.status(403).json({ message: "Token Required" })
    }
}


const IsAdmin = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const bearerToken = bearerHeader.split(' ')[1];
    const decodedToken = jwt.decode(bearerToken);
    console.log(decodedToken['payload'].role);
    if (decodedToken['payload'].role === process.env.ADMIN_ROLE_ID) {
        next();
    } else {
        res.status(403).json({ message: "Not authorized" })
    }
}



module.exports = { IsAuthenticated, IsAdmin }