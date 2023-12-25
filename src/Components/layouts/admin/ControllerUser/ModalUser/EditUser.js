import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import request from '../../../../Container/Config/Request';
import { toast , ToastContainer} from 'react-toastify';
import { useSelector } from 'react-redux';


function EditUser({show , setShow , itemUsername}){
    
    const handleClose = () => setShow(false);

    const [surplus , setSurplus ] = useState();

    const dataToken = useSelector((state) => state.auth.login.currentUser);


    const handleAddSurplus = async () => {
        try {
            request.put('/edituser/' + itemUsername , {
                surplus,
                itemUsername
            },{
              headers : {token : dataToken.token}
            })
            .then(res => toast.success(res.data))
        } catch (error) {
            console.log(error);            
        }
    } 

    return(
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cộng Tiền User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Tên User Muốn Cộng
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={itemUsername}
        />
      </InputGroup>

        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Số Tiền Muốn Cộng
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setSurplus(e.target.value)}
        />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleAddSurplus}>
            Lưu Lại
          </Button>
          <ToastContainer/>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default EditUser