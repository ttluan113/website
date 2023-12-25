import classNames from "classnames/bind";
import Styles from './Header.module.scss';

import Logo from '../../../asset/img/Logo.png';
import AvtLogin from '../../../asset/img/avt1.png';

import { Link , useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';



const cx = classNames.bind(Styles);

function Header() {
    
    
    const nameUser = useSelector((state) => state.auth.login?.currentUser);


    const navigate = useNavigate();
    
    const handleLogOut = () => {
        localStorage.removeItem("persist:root");
        navigate('/')
        window.location.reload();
    }

    

    return ( 

    <div className={cx('wrapper')}>
        <div className={cx('logo')}>
            <Link to='/'><img src={Logo} className={cx('logo')} alt="..."/></Link>
        </div>
        {
           nameUser ? <div>
            <div className={cx('container-user')}>
                <div className="dropdown">
                    <button className={cx('containerUser')} style={{backgroundColor : "#4c2fff"}} class ="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img style={{width : "30px" , height : "30px"}} src={AvtLogin} alt="..."/>
                    </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" >Xin Chào : { nameUser.username } </a></li>
                            <li><a className="dropdown-item" >Số Dư : {nameUser.surplus} đ</a></li>
                            <li><Link to='/bank' className="dropdown-item">Nạp Tiền</Link></li>
                            <li><Link to='/history' className="dropdown-item">Source Đã Mua</Link></li>
                            {nameUser.admin === true ?
                            <li><Link style={{textDecoration : "none"}} to='/admin'><a style={{color : "red"}} className="dropdown-item">Quản Lí Trang</a></Link></li>
                            :
                            <></>
                            }
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" onClick={handleLogOut}>Đăng Xuất</a></li>
                        </ul>
                    </div>
                    </div>
           </div> :  
        <div className={cx('container-user')}>
            <Link to="/login" style={{lineHeight : "50px"}}><button className={cx('btn-login')}>Đăng Nhập</button></Link>
            <Link to="/reg" style={{lineHeight : "50px"}}><button className={cx('btn-reg')}>Đăng Ký</button></Link>
        </div>
        }
        
    </div> 
    );
}

export default Header;