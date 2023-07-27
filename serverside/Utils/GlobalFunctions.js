// Imports
const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const env = require('dotenv');

// Config
env.config();

// JWT token generate
exports.generateToken = function (payload) {
  return JWT.sign(payload,process.env.JWT_SECRETKEY);
}

// Password encrypt
exports.passwordEncrypt = function (payload) {
    const salt = 10;
    return bcrypt.hashSync(payload,salt);
}

// Password decrypt
exports.passwordDecrypt = function (hashPassword,password){
    return bcrypt.compareSync(password,hashPassword);
}

// Authentication Middleware
exports.authMiddleware = function (req, res, next) {
 const token = req.headers.authorization;
 if(token){
   const isAuth = token.split(" ")[1];
   JWT.verify(isAuth,process.env.JWT_SECRETKEY,function(error,decoded){
      if(error){
         res.status(400).json({Message:"Invaild token entered."})
      }else{
         req.user = decoded;
         next();
      }
   })
 }else{
    res.status(404).json({Message:'Authentication required.'})
 }
}