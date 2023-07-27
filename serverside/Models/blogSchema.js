const mongoose = require('mongoose');
const {Schema} = mongoose;

const BlogScheme = new Schema({
    blogname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    authorname:{
        type:String,
        required:true
    }
},{timestamps:true});

const Blog = mongoose.model('blogs',BlogScheme);

module.exports = Blog;