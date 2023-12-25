import classNames from "classnames/bind";
import Styles from './Bank.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import LogoBank from '../../../asset/img/Logo_MB_new.png';
import QRBank from '../../../asset/img/qrbank.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(Styles);

function Bank() {
    return ( 
        <div className={cx('wrapper')}>
            <div>
                <Header/>
            </div>

            <div className={cx('wrapper-bank')}>
                <div className={cx('form-bank')}>
                    <img className={cx('img-bank')} src={LogoBank} alt="..."/>
                    <li>Số Tài Khoản : 0899804328</li>
                    <li>Chủ Tài Khoản : Trần Trọng Luân</li>
                    <li>Ngân Hàng : MBBank</li>
                    <li>Nội Dung Nạp : Email Của Bạn </li>
                    <li>Bạn Có Thể Quét QR Tại Đây Nhé !!!</li>
                    <img className={cx('img-qr')} src={QRBank} alt="..."/>
                    <li><FontAwesomeIcon className={cx('spinner')} icon={faSpinner}/> Xử lý giao dịch tự động trong vài giây...</li>
                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
     );
}

export default Bank;