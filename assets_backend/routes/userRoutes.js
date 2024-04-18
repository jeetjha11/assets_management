const express=require('express');
const {register,login}=require('../controller/userController');
// const ValidateUserData = require('../validators/userValidators');

const {ValidateUserData,ValidateLoginData}=require('../validators/userValidators')



const userRoutes=express.Router();


userRoutes.post('/register',ValidateUserData,register)
userRoutes.post('/login',ValidateLoginData,login)



module.exports=userRoutes