import classNames from "classnames/bind";
import Styles from './Footer.module.scss';

import LogoFooter from '../../../asset/img/Logo.png';


const cx = classNames.bind(Styles);

function Footer() {
    return ( 
        <div className={cx('wrapper')}>
                <img className={cx('img-footer')} src={LogoFooter} alt='...'/>
                <p>HỆ THỐNG BÁN MÃ NGUỒN TỰ ĐỘNG </p>
                <p>CHÚNG TÔI LUÔN LẤY UY TÍN LÀM HÀNG ĐẦU ĐỐI VỚI KHÁCH HÀNG</p>
                <p>Thời gian hỗ trợ: Sáng: 8h - 11h30  | Chiều: 14h - 20h00</p>
                <div>
                    <span>Thiết Kế & Vận Hành Bởi : <a href="https://www.facebook.com/ttluan113">Trần Luân</a></span>
                </div>
        </div>
     );
}

export default Footer;