import classNames from "classnames/bind";
import Styles from '../Login/Login.module.scss';
import Logo from '../../../../asset/img/Logo.png';
import LogoLogin from '../../../../asset/img/LogoLogin.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";

import { useNavigate} from 'react-router-dom';

import { Link } from 'react-router-dom';
import Request from "../../../Container/Config/Request";

const cx = classNames.bind(Styles);

function Register() {

    const [username , setUsername ] = useState("");
    const [password , setPassword ] = useState("");

    const navigate = useNavigate();
   

    const handleRegisterUser = async () => {
        try {
            if(username === "" || password === ""){
                toast.error("Bạn Cần Nhập Đủ Thông Tin !!!")
            }else{
                await Request.post('reg' , {
                    username  ,password 
                });
                toast.success("Đăng Ký Thành Công !!!");
                navigate('/login')
            }
        } catch (error) {
            toast.error("Người Dùng Đã Tồn Tại !!!");
        }        
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header-login')}>
                <Link  to='/'><img className={cx('img-login')} src={Logo} alt="..."/></Link>
            </div>

            <div className={cx('content-login')}>
                <div className={cx("login-right")}>
                    <div className={cx('nigol_title')}>
                        <h2 className={cx('h2-login')}>Đăng Ký</h2>
                        <span className={cx('span-login')}>Tạo website tự động bằng AI trong 30 giây</span>
                    </div>
                    <form className={cx('form-login')}>
                        <label>Tên Tài Khoản</label>
                        <input onChange={(e) => setUsername(e.target.value)} className={cx('input-login')}/>
                        <label>Mật Khẩu</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className={cx('input-login')}/>
                        <button type="button" onClick={handleRegisterUser} className={cx('btn-login')}>Đăng Ký</button>
                        <ToastContainer/>
                    </form>

                    <div className={cx('tg_dndk_btn_2023')}>
                        <span>Bạn đã có tài khoản? <Link to='/login'>Đăng Nhập</Link></span>
                    </div>
                </div>

                <div className={cx('login-left')}>
                        <img className={cx('banner-login')} src={LogoLogin} alt="..."/>
                </div>
            </div>
        </div>
     );
}

export default Register;