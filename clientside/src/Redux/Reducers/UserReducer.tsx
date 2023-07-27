import { createSlice } from "@reduxjs/toolkit"
import { CreateBlog, DeleteBlog, GetAllBlogs, GetBlogById, LoginUser, RegisterUser, UpdateBlog } from "../Actions/UserAction";

const initialState = {
    userData: [],
    token:'',
    blogs:[]
}

export const UserSlice = createSlice({
    name: "userReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.userData = action.payload.data;
        })
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            localStorage.setItem('token',action.payload.data.token);
            state.userData = action.payload.data;
            state.token = action.payload.data.token;
        })
        builder.addCase(CreateBlog.fulfilled, (state, action) => {
        })
        builder.addCase(UpdateBlog.fulfilled, (state, action) => {
        })
        builder.addCase(GetAllBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload.data;
        })
        builder.addCase(GetBlogById.fulfilled, (state, action) => {
            state.blogs = action.payload.data;
        })
        builder.addCase(DeleteBlog.fulfilled, (state, action) => {
        });
    }
});

export default UserSlice.reducer;