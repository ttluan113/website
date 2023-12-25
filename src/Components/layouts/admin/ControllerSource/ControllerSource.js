import classNames from "classnames/bind";
import Styles from './ControllerSource.module.scss';
import ModalSource from './ModalSource/ModalSource';
import { useState } from "react";
import DeleteSource from "./ModalSource/DeleteSoure";

import request from '../../../Container/Config/Request';
import AddSource from "./ModalSource/AddSource";



const cx = classNames.bind(Styles);

function ControllerSource({itemId , itemImg , itemMa,  itemSlug}) {



    //Edit Source
    const [checkShow , setCheckShow ] = useState(false);

    const [checkAddSource , setCheckAddSource ] = useState(false);


    const [valueData , setValueData ] = useState([]);


    const handleCheckShow = async () => {
         setCheckShow(true);

        await request.get('/sources' + '/' + itemSlug)
        .then(res => setValueData(res.data))

    }



    //DeleteSource
    const [checkShowDelete , setCheckShowDelete] = useState(false);

    const handleCheckShowDelete = () => {
        setCheckShowDelete(true)
    }

    return ( 
        <div className={cx('wrapper')}>
            <div>
            <table className={cx('table')}>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Img</th>
                    <th scope="col">Mã Số</th>
                    <th scope="col">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{itemId}</th>
                    <td><img className={cx('img-controller')} src={itemImg} alt="..."/></td>
                    <td>{itemMa}</td>
                    <td >
                    <button onClick={handleCheckShow} 
                    type="button" 
                    style={{marginLeft : "10px"}} 
                    className="btn btn-warning">Sửa Source</button>
                    <button onClick={handleCheckShowDelete} 
                    type="button" style={{marginLeft : "10px"}} 
                    className="btn btn-danger">Xóa Source</button>
                    </td>
                    </tr>
                </tbody>
                <ModalSource 
                valueData={valueData}
                checkShow={checkShow} setCheckShow={setCheckShow}
                itemSlug={itemSlug}/>

                <DeleteSource checkShowDelete={checkShowDelete} setCheckShowDelete={setCheckShowDelete}
                itemSlug={itemSlug}
                itemMa={itemMa}
                />

                <AddSource checkAddSource={checkAddSource}
                setCheckAddSource={setCheckAddSource}/>
                </table>
            </div>
        </div>
     );
}

export default ControllerSource;