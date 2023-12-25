import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import request from '../../../../Container/Config/Request';
import { toast , ToastContainer} from 'react-toastify';

import { useSelector } from 'react-redux';


function DeleteUser({showDelete , setShowDelete , username , itemId}){

  const handleClose = () => setShowDelete(false);

  const dataToken = useSelector((state) => state.auth.login.currentUser);


  const handleDeleteUser = async () => {
    try {
      await request.delete('/deleteuser/' + itemId , {
        data : {
          _id : itemId
        },
        headers : {token : dataToken.token}
      })
      .then(res => toast.success(res.data))
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    } catch (error) {
      
    }
  }

  return (
    <>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn Chắc Chắn Muốn Xóa User {username} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
             Đóng
          </Button>
          <Button onClick={handleDeleteUser} variant="primary">
            Lưu Lại
          </Button>
          <ToastContainer/>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default DeleteUser;