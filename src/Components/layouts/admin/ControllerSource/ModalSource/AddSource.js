import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import request from '../../../../Container/Config/Request';


import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddSource ({checkAddSource , setCheckAddSource}){

    const handleClose = () => setCheckAddSource(false);

    const dataToken = useSelector((state) => state.auth.login.currentUser);


    const [ma , setMa] = useState("");
    const [img , setImg] = useState("");
    const [imgdetail1 , setImg1] = useState("");
    const [imgdetail2 , setImg2] = useState("");
    const [imgdetail3 , setImg3] = useState("");
    const [slug , setSlug] = useState("");
    const [price , setPrice] = useState("");
    const [pricestring , setPriceString] = useState("");
    const [link , setLink] = useState("");

    const handleAddSource = async() => {
      try {
        await request.post('addsource' , {
          ma , img , imgdetail1 , imgdetail2 , imgdetail3 , slug , price , pricestring , link
        } ,{
          headers : {token : dataToken.token}
        })
        .then(res => toast.success(res.data))
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      } catch (error) {
          toast.error(error.response.data);
      }
    }


  return (
    <>
      <Modal show={checkAddSource} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Source</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Mã Số
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setMa(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Img Source
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setImg(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Img Chi Tiết 1
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setImg1(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Img Chi Tiết 2
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setImg2(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Img Chi Tiết 3
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setImg3(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Slug Source
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setSlug(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Giá
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setPrice(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Giá String
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setPriceString(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Link
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setLink(e.target.value)}
        />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleAddSource}>
            Lưu Lại
          </Button>
          <ToastContainer/>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddSource