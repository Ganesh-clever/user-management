import { Axios } from "../ServerConfig/Axios";

class User {
    Register(req:any){
     return Axios.post('user/register',req);
    }

    Login(req:any){
     return Axios.post('user/login',req);
    }

    CreateBlog(req:any){
        return Axios.post('create/blog',req);
    }

    UpdateBlog(req:any){
        return Axios.put('create/blog',req);
    }

    GetBlogById(req:any){
        return Axios.get('create/blog',req);
    }

    GetAllBlogs(){
        return Axios.get('create/blog');
    }

    DeleteBlog(req:any){
        return Axios.delete('create/blog',req);
    }
}

export default new User();