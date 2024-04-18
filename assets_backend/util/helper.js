
const { response } = require('express');
const jsonwebtoken= require('jsonwebtoken');
const create_jwt=(payload)=>{
    try{
    const secret_key= process.env.JWT_SECRET
    const token=jsonwebtoken.sign({payload:payload},secret_key,{expiresIn:60000})
    return token;
    }
    catch(err){
        return response(err);
    }
}






module.exports={
    create_jwt
}