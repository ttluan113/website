import classNames from "classnames/bind";
import Styles from './ControllerUser.module.scss';

import {  useState } from "react";
import EditUser from "./ModalUser/EditUser";

import DeleteUser from '../ControllerUser/ModalUser/DeleteUser';

const cx = classNames.bind(Styles);

function ControllerUser({itemId , itemSurplus , itemUsername}) {


    const [show, setShow] = useState(false);

    const [showDelete , setShowDelete ] = useState(false);



    const handleShow = async () => {
        setShow(true)
    }

    const handleShowDelete = () => {
        setShowDelete(true)
    }



    return ( 
        <div className={cx('wrapper')}>
            <table className="table" >
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Số Tiền</th>
                    <th  scope="col">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                        <th scope="row">{itemId}</th>
                        <td>{itemUsername}</td>
                        <td>{itemSurplus}</td>
                        <td >
                        <button onClick={handleShow} type="button" style={{marginLeft : "10px"}} className="btn btn-warning">Cộng Tiền User</button>
                        <EditUser show={show} setShow={setShow} itemUsername={itemUsername}/>
                        <button onClick={handleShowDelete} type="button" style={{marginLeft : "10px"}} className="btn btn-danger">Xóa User</button>
                        <DeleteUser itemUsername={itemUsername} 
                        itemId={itemId}
                        setShowDelete={setShowDelete} showDelete={showDelete}/>
                        </td>
                        </tr>
                </tbody>
                </table>
        </div>
     );
}

export default ControllerUser;