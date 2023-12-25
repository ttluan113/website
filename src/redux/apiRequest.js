import request from '../Components/Container/Config/Request';

import { LoginSuccess , loginFailed , loginStart  } from './authSlice';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const LoginUser = async (user , dispatch , navigate ) => {
    dispatch(loginStart());
    try {
        const res = await request.post('/login' , user )
        dispatch(LoginSuccess(res.data));
        toast.success("Đăng Nhập Thành Công !!!");
            navigate('/');
        } catch (error) {
        dispatch(loginFailed());
        toast.error("Tài Khoản Hoặc Mật Khẩu Không Chính Xác !!!")
    }
}



