// Imports
const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Configs
env.config();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// DB connectivity
mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
  console.log('DB connected successfully...');
}).catch((err)=>{
console.log('DB connected with some issues..');
})

// Api
const userRouter = require('./Routers/userRouter');
const blogRouter = require('./Routers/blogRouter');

app.use('/api',userRouter);
app.use('/api',blogRouter);

// Server listen port
app.listen(process.env.PORT,(()=>{
    console.log(`Server connected with port : ${process.env.PORT}`);
}));