import classNames from "classnames/bind";
import Styles from './Dashboard.module.scss';
import Header from "../Header/Header";
import request from '../../Container/Config/Request';

import ControllerSource from "./ControllerSource/ControllerSource";
import ControllerUser from "./ControllerUser/ControllerUser";
import { useEffect, useState } from "react";

import AddSource from "./ControllerSource/ModalSource/AddSource";

const cx = classNames.bind(Styles);


function Dashboard() {

    const [dataSource , setDataSource ] = useState([]);
    const [dataUser , setDataUser ] = useState([]);
    const [checkAddSource , setCheckAddSource ] = useState(false);

    const handleCheckAdd = () => {
        setCheckAddSource(true)
    }


    useEffect(() => {
        request.get('getusers')
        .then(res => setDataUser(res.data))
    },[])


    useEffect(() => {
        request.get('/source')
        .then(res => setDataSource(res.data))
    },[])

   

    return ( 
        <div className={cx('wrapper')}>
            <div>
                <Header/>
            </div>
            
            <div className={cx('wrapper-main')}>
                <div className={cx('container-source')}>
                    <h3 style={{textAlign : "center"}}>Quản Lý Source
                    
                    <button type="button" 
                    style={{margin : "10px 10px"}} 
                    className="btn btn-primary"
                    onClick={handleCheckAdd}
                    >Thêm Source</button>

                    </h3>
                    <div>
                        {dataSource.map((item) => 
                        <ControllerSource dataSource={dataSource}
                        key={item._id}
                        itemSlug={item.slug}
                        itemId={item._id}
                        itemMa={item.ma}
                        itemImg={item.img}
                        />
                        )}
                    </div>
                </div>

                <div className={cx('container-source')}>
                    <h3 style={{textAlign : "center"}}>Quản Lý User</h3>
                    <div>
                        {dataUser.map((item) => <ControllerUser
                        key={item._id}
                        itemId={item._id}
                        itemSurplus={item.surplus}
                        itemUsername={item.username}
                        /> )}
                    </div>
                </div>
                <AddSource checkAddSource={checkAddSource}
                setCheckAddSource={setCheckAddSource}/>

            </div>
        </div>
     );
}

export default Dashboard;