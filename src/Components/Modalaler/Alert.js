import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function Alert(){
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông Báo !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>WebSite Vẫn Đang Trong Quá Trình Nâng Cấp Để Mang Lại Trải Nghiệm Người Dùng Tốt Nhất 
            <br/>
            Nếu Có Lỗi Xảy Ra Mong Bạn Thông Cảm 
            <br/>
            Nếu Trong Quá Trình Sử Dụng Có Điều Gì Khiến  Bạn Không Hài Lòng Bạn Hãy Liên Hệ Với Mình <a href='https://www.facebook.com/ttluan113'>Tại Đây</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
           FullStack Cảm Ơn Bạn
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Alert