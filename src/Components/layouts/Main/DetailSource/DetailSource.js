import classNames from "classnames/bind";
import Styles from './DetailSource.module.scss';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Request from "../../../Container/Config/Request";


import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const cx = classNames.bind(Styles);


function DetailSource() {

    const [dataSource , setDataSource ] = useState([]);
    const usernameUser = useSelector((state) => state.auth.login.currentUser);
    const dataToken = useSelector((state) => state.auth.login.currentUser);

    const location = useLocation();

    const urldetail = location.pathname.slice(9 , 999);

  

    useEffect(() => {
       Request.get('sources/'  + urldetail)
       .then(res => setDataSource(res.data))
    },[]);


    const handleBuyCode = async () => {
        if(usernameUser === null){
            toast.error("Bạn Cần Đăng Nhập Trước !!!")
        }else{
            const username = usernameUser.username;
            try {
                    const slug = urldetail;
                    await Request.post('/buycode' ,{
                        username , slug
                    },{
                        headers : {token : dataToken.token}
                    })
                    toast.success("Thanh Toán Thành Công !!!");
            } catch (error) {
                toast.error(error.response.data)
            }
        }
    }


    return ( 
        <div className={cx('wrapper')}>
            <div>
                <Header/>
            </div>
            {
                dataSource.map((item) => (
                    <div key={item._id}>
                        <div className={cx('wrapper-detail')}>
                            <div className={cx('detail-left')}>
                                    <img className={cx("img-detail")} src={item.img} alt="..."/>
                            </div>

                            <div className={cx('detail-right')}>
                                <h2>{item.ma}</h2>
                                <span style={{fontSize : "30px" }}>Giá : {item.pricestring} đ</span>
                                <li className={cx('li-detail')}>Tiết kiệm thời gian và chi phí</li>    
                                <li className={cx('li-detail')}>Dễ hiểu, dễ sử dụng</li>
                                <li className={cx('li-detail')}>Tuỳ chỉnh linh hoạt</li>  
                                <li className={cx('li-detail')}>Hỗ Trợ Setup</li>     
                                <div className={cx('btn-detail')}>

                               {dataSource.map((item) => (
                                <div key={item._id}>
                                <button type="button" 
                                className={cx("btn-detail-list-1")} 
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal" 
                                data-bs-whatever="@mdo">Mua Ngay</button>
                                    <div className="modal fade" 
                                    id="exampleModal" tabIndex="-1" 
                                    aria-labelledby="exampleModalLabel" 
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 style={{color : "red"}} className="modal-title" id="exampleModalLabel">Xác thực thanh toán</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                            <div className="mb-3">
                                                <label style={{color : "black"}} htmlFor="recipient-name" className="col-form-label">Mã Số </label>
                                                <input value={item.ma} style={{backgroundColor : "#e9ecef"}} type="text" className="form-control" id="recipient-name" readOnly/>
                                            </div>

                                            <div className="mb-3">
                                                <label style={{color : "black"}} htmlFor="recipient-name" className="col-form-label">Giá  </label>
                                                <input value={item.pricestring + " " + "đ"}   style={{backgroundColor : "#e9ecef"}} type="text" className="form-control" id="recipient-name" readOnly/>
                                            </div>

                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                            <button onClick={handleBuyCode} type="button" className="btn btn-primary">Xác Nhận</button>
                                            <ToastContainer/>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                               ))}

                                    <button className={cx('btn-detail-list-2')}>Xem Demo</button>
                                </div>
                            </div>

                        </div>
                            <div className={cx('detail-img')}>
                                    <h2 style={{color : "white" , textAlign : "center" , paddingTop : "10px"}}>Một Số Hình Ảnh</h2>
                                    <div className={cx('img')}>
                                        <img className="" src={item.imgdetail1} alt="..."/>
                                        <img className="" src={item.imgdetail2} alt="..."/>
                                        <img className="" src={item.imgdetail3} alt="..."/>
                                    </div>
                            </div>

                        
                    </div>
                ))
            }
            <div>
                <Footer/>
            </div>
        </div> 
    );
}

export default DetailSource;