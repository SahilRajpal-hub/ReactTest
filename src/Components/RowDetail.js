import React,{useState} from "react";
import {Modal,Button} from 'react-bootstrap'

const RowDetail = () => {
  const iconStyle = {
    fontSize: "25px",
    verticalAlign: "middle",
    display: "table-cell",
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="tableContent" className="tableContent">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Agri Input Category</th>
              <th scope="col">Product Image</th>
              <th scope="col">Production Description</th>
              <th scope="col">Order Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Seeds/Seedling</td>
              <td>
                <img class="image2" src="img_avatar.png" alt="" />
              </td>
              <td>Chili Skata 111</td>
              <td>26</td>
              <td>
                <i style={iconStyle} onClick={handleShow} className="fas fa-location-arrow"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Seeds/Seedling</td>
              <td>
                <img className="image2" src="img_avatar.png" alt="" />
              </td>
              <td>Chili Skata 111</td>
              <td>26</td>
              <td>
                <i style={iconStyle} onClick={handleShow} className="fas fa-location-arrow"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Seeds/Seedling</td>
              <td>
                <img className="image2" src="img_avatar.png" alt="" />
              </td>
              <td>Chili Skata 111</td>
              <td>26</td>
              <td>
                <i style={iconStyle} onClick={handleShow} className="fas fa-location-arrow"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the modal Description</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RowDetail;
