import classNames from "classnames/bind";
import Styles from './Login.module.scss';
import Logo from '../../../../asset/img/Logo.png';
import LogoLogin from '../../../../asset/img/LogoLogin.png';

import { Link , useNavigate} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginUser } from "../../../../redux/apiRequest";

const cx = classNames.bind(Styles);

function Login() {

    const [username , setUsername ] = useState("");
    const [password , setPassword ] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const handleLoginUser = async () => {
        const userLogin = {
            username , password 
        }
        await LoginUser(userLogin , dispatch , navigate);
    }
    
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header-login')}>
                <Link  to={"/"}><img className={cx("img-login")} src={Logo} alt="..."/></Link>
            </div>

            <div className={cx('content-login')}>
                <div className={cx("login-right")}>
                    <div className={cx('nigol_title')}>
                  <h2 className={cx('h2-login')}>Đăng Nhập</h2>
                        <span className={cx('span-login')}>Tạo website tự động bằng AI trong 30 giây</span>
                    </div>
                    <form className={cx('form-login')}>
                        <label>Tên Tài Khoản</label>
                        <input className={cx('input-login')} onChange={(e) => setUsername(e.target.value)}/>
                        <label>Mật Khẩu</label>
                        <input type="password" className={cx('input-login')} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="button" onClick={handleLoginUser} className={cx('btn-login')}>Đăng Nhập</button>
                        <ToastContainer/>
                    </form>

                    <div className={cx('tg_dndk_btn_2023')}>
                        <span>Bạn chưa có tài khoản? <Link to='/reg'>Đăng Ký</Link></span>
                    </div>
                </div>

                <div className={cx('login-left')}>
                        <img className={cx('banner-login')} src={LogoLogin} alt="..."/>
                </div>
            </div>
        </div>
     );
}

export default Login