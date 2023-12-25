import classNames from 'classnames/bind';
import Styles from './Content.module.scss';

import Logo from '../../../../asset/img/Logo.png'

const cx = classNames.bind(Styles);

function Content() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('content-left')}>
                <img className={cx('img-content')} src={Logo} alt='...'/>
                <h2 style={{color : "white"}}>Tạo Website Tự Động  Trong 30s</h2>
                <li className={cx('li-content')}>FullStack sẽ tạo ra một trang web chuyên nghiệp với ý tưởng của riêng bạn chỉ với vài cú click</li>
                <li className={cx('li-content')}>Không cần phải có kiến thức về lập trình hay thiết kế, website của bạn sẽ được tối ưu nội dung và hình ảnh chỉ trong giây lát !!</li>
                <button className={cx('btn-creat')}><a className={cx('contact')} href="https://www.facebook.com/ttluan113">Liên Hệ Tạo Web</a></button>
            </div>
        </div>
     );
}

export default Content;