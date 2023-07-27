const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserScheme = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const User = mongoose.model('users',UserScheme);

module.exports = User;