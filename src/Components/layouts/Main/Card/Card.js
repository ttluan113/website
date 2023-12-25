import classNames from "classnames/bind";
import Styles from './Card.module.scss';


import Request from "../../../Container/Config/Request";

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
const cx = classNames.bind(Styles)

function Card() {

    const [dataSource , setDataSource ] = useState([])


    useEffect(() => {
        Request.get('/source')
        .then(res => setDataSource(res.data))
    },[])

    return ( 
       <div className={cx('card-body')}>
        {dataSource.map((item) => (
            <div key={item._id}>
                <div className={cx("card-container")}>
                    <div className={cx("card")}>
                        <div className={cx("img-content")}>
                            <Link  style={{textDecoration : "none"}} to={"/sources" + "/" + item.slug}>
                            <img className={cx('img-card')} src={item.img} alt="..."/>
                            <span className={cx('price-mobile')} >Giá : {item.pricestring} đ</span>
                            </Link>
                        </div>
                    <div className={cx("content")}>
                        <p style={{color : "black"}} className={cx("heading")}>{item.ma}</p>
                        <p>
                            <li className={cx('li-card')}>Tiết kiệm thời gian và chi phí</li>    
                            <li className={cx('li-card')}>Dễ hiểu, dễ sử dụng</li>
                            <li className={cx('li-card')}>Tuỳ chỉnh linh hoạt</li>     
                        </p>
                            <div className={cx('form-detail')}>
                                <span style={{color : "#f60bff "}}>Giá : {item.pricestring} đ</span>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        ))}
       </div>
    );
}

export default Card;