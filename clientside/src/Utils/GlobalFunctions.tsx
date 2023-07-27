import { IRouterParams } from "../interfaces/interface";
import {Navigate, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

export const ProductedRouter : React.FC<IRouterParams> = ({children}) => {
    const token  = localStorage.getItem('token');
    console.log(token);
    return token !== null ? <>{children}</> : <Navigate to='/login'/>
}

export const PublicRouter : React.FC<IRouterParams> = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(()=>{
       if(token !== null){
        navigate('/');
       }else{
        navigate('/login');
       }
    },[token]);
    return <>{children}</>
}