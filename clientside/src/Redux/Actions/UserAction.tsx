import {createAsyncThunk} from '@reduxjs/toolkit'
import User from '../Services';

export const RegisterUser = createAsyncThunk(
    'userapi/register',
    async(req:any)=>{
       return await User.Register(req);
    }
)

export const LoginUser = createAsyncThunk(
    'userapi/login',
    async(req:any)=>{
       return await User.Login(req);
    }
)

export const CreateBlog = createAsyncThunk(
    'userapi/CreateBlog',
    async(req:any)=>{
       return await User.CreateBlog(req);
    }
)

export const UpdateBlog = createAsyncThunk(
    'userapi/UpdateBlog',
    async(req:any)=>{
       return await User.UpdateBlog(req);
    }
)

export const GetBlogById = createAsyncThunk(
    'userapi/GetBlogById',
    async(req:any)=>{
       return await User.GetBlogById(req);
    }
)

export const GetAllBlogs = createAsyncThunk(
    'userapi/GetAllBlogs',
    async()=>{
       return await User.GetAllBlogs();
    }
)

export const DeleteBlog = createAsyncThunk(
    'userapi/DeleteBlog',
    async(req:any)=>{
       return await User.DeleteBlog(req);
    }
)