import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';


import request from '../../../../Container/Config/Request';

function ModalSource({checkShow  , setCheckShow , valueData , itemSlug}) {

  const dataToken = useSelector((state) => state.auth.login.currentUser);


  const [valuePrice , setValuePrice ] = useState(" ");
  const [valuePriceString , setValuePriceString ] = useState(" ");
  const [valueMa , setValueMa ] = useState();
  const [valueSlug ,  setValueSlug ] = useState("")


  const handleCloseShow = async () => {
    setCheckShow(false);

  }

  const handleSaveEdit = async () => {
    try {
      await request.put('/editsource/' + itemSlug ,{
        valuePrice , 
        valuePriceString
      },{
        headers : {token : dataToken.token}
      })
      .then(res => toast.success(res.data))
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    } catch (error) {
      toast.error(error.response.data)
    }
  }

  const handleClose = () => setCheckShow(false);

  return (
    <>
      <Modal show={checkShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa Source</Modal.Title>
        </Modal.Header>

        {valueData.map((item) => (
        <Modal.Body>


          <InputGroup  className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Mã Số</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={item.ma || valueMa}
            onChange={(e) => setValueMa(e.target.value)}
          />
          </InputGroup>

          <InputGroup  className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Img Source</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={item.img}
          />
          </InputGroup>

          <InputGroup  className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Img Chi Tiết 1</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={item.imgdetail1}
          />
          </InputGroup>

          <InputGroup  className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Img Chi Tiết 2</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={item.imgdetail2}
          />
          </InputGroup>

          <InputGroup  className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Img Chi Tiết 3</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={item.imgdetail3}
          />
          </InputGroup>
          <InputGroup  className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Slug Source</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={valueSlug ||  item.slug}
            onChange={(e) => setValueSlug(e.target.value)}
          />
          </InputGroup>

          <InputGroup  className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Giá </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          value={valuePrice || item.price}
          onChange={(e) => setValuePrice(e.target.value)}
          
          />
          </InputGroup>
          <InputGroup  className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Giá String</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={valuePriceString || item.pricestring}
            onChange={(e) => setValuePriceString(e.target.value)}
          />
          </InputGroup>
          <ToastContainer/>
        </Modal.Body>
        ))}
        <Modal.Footer>
          <Button onClick={handleCloseShow} variant="secondary" >
            Đóng
          </Button>
          <Button onClick={handleSaveEdit} variant="primary" >
            Lưu lại
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSource;