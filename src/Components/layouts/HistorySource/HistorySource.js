import classnames from 'classnames/bind';
import Styles from './HistorySource.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import request from '../../Container/Config/Request';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const cx = classnames.bind(Styles);

function HistorySource() {

    const usernameUser = useSelector((state) => state.auth.login.currentUser);

    const [linkSource , setLinkSource ] = useState([]);


    const dataToken = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        const username = usernameUser.username;
        request.post('/history' ,{username } ,{
            headers : {token : dataToken.token}
        })
        .then(dataSource =>  setLinkSource(dataSource.data))
    },[])


    return ( 
        <div className={cx('wrapper')}>
            <div>
                <Header/>
            </div>
            <div className={cx('table-history')}>
               
                    <table  className={cx("table")}>
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Mã Số</th>
                            <th scope="col">Time</th>
                            <th scope="col" style={{width : "20%"}}>Thao Tác</th>
                            </tr>
                        </thead>
                        {linkSource.map((item) => (
                            <tbody >
                                <tr>
                                <th scope="row">{item._id}</th>
                                <td>{item.ma}</td>
                                <td>{item.time}</td>
                                <td>
                                    <button 
                                    type='button'  
                                    className={cx("btn btn-primary")}>
                                        <a 
                                        className={cx('link-source')} href={item.link}>Tải Xuống
                                        </a>
                                    </button>
                                </td>
                                </tr>
                                <tr>
                                </tr>
                            </tbody>
                ))}
                    </table>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
     );
}

export default HistorySource;