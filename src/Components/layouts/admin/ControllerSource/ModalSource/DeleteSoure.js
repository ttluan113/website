import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import request from '../../../../Container/Config/Request';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';


function DeleteSource({setCheckShowDelete , checkShowDelete , itemSlug , itemMa}) {

  const handleClose = () => setCheckShowDelete(false);
  const dataToken = useSelector((state) => state.auth.login.currentUser);


  const handleDeleteSource = async () => {
    try {
      await request.delete('deletesource/' + itemSlug  ,{
        data : {itemSlug}, headers : {token : dataToken.token}
      })
      .then(res => toast.success(res.data))
      setTimeout(() => {
        window.location.reload()
      }, 2000);

    } catch (error) {
        toast.error(error.response.data)
    }

  }

  return (
    <>
      <Modal show={checkShowDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa Source</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn Đã Chắc Chắn Xóa {itemMa} Chưa ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button onClick={handleDeleteSource} variant="primary">
            Đúng
          </Button>
        </Modal.Footer>
          <ToastContainer/>
      </Modal>
    </>
  );
}

export default DeleteSource;