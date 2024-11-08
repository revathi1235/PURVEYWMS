import React from 'react'
import AporaAdminNavbar from '../../Components/AporaAdminNavbar'
import { Row,Col, Container } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
function AdminUsermanagement() {
  const [selectedValue, setSelectedValue] = useState("A"); // To track the selected radio button

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
        <AporaAdminNavbar/>
        <Container>
        <Row className='mt-3'>
          <Col lg={6}>
          <label>
        <input
          type="radio"
          value="A"
          checked={selectedValue === "A"}
          onChange={handleRadioChange}
        />
       Add User
      </label>

     
          </Col>
          <Col lg={6}>
          <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          value="B"
          checked={selectedValue === "B"}
          onChange={handleRadioChange}
        />
       Assign Role
      </label>
          </Col>
        </Row>
        </Container>
        <Container>
        <h5 className='materialinward-heading'>Warehouse Addition</h5>
        <div style={{ marginTop: "20px" }}>
        {selectedValue === "A" &&(
          <Container>

<Row>
              <Col lg={2}>
              <FloatingLabel label="User Name" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Password" className="floating-label-custom">
            <Form.Control
              type="password"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Re-Type Password" className="floating-label-custom">
            <Form.Control
              type="password"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Name" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Gender" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Email" className="floating-label-custom">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Designation" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Department" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <button className='apora-button'>Save</button>
         
        </Col>
      </Row>
              </Col>
              <Col lg={2}>
              <FloatingLabel label="City" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Zip Code" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Country" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Date of Birth" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Date of Birth" className="floating-label-custom">
            <Form.Control
              type="date"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Joining Date" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel> 
           <FloatingLabel label="Mobile" className="floating-label-custom">
            <Form.Control
              type="number"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Phone" className="floating-label-custom">
            <Form.Control
              type="number"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <Row className="justify-content-center mt-4">
        <Col xs="auto">
      
          <button style={{border:"none",background:"rgba(2, 151, 70, 1)",color:"white",borderRadius:"5px",padding:"6px"}}>Cancel</button>
        </Col>
      </Row>
              </Col>
          <Col lg={1}></Col>
          <Col lg={7}>
          <div className="table-responsive" >
              <Table className="mt-3" style={{height:"200px"}}>
                <thead className="bg-secondary size-sm common-thead-body-scroll">
                  <tr className="common-table-thead">
                    <th></th>
                    <th>Assign Settings</th>
                    <th>  Warehouse ID</th>
                    <th>Warehouse Name</th>
                    <th>Warehouse Address </th>
                    <th>Administrator Name </th>
                    <th>Administrator Mail ID </th>
                    <th>Phone </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>

                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
            </Row>
            
          </Container>
          )}
        {selectedValue === "B" && (
         <Container>
          <Row>
            <Col lg={4}>
            <h5 className='apora-admin-subheading'>Unpack</h5>
            <label>
        <input
          type="radio"
          value="Apple"
          
        />
      Arold
      </label>
            </Col>
            <Col lg={4} style={{textAlign:"justify"}}>
            <h5 className='apora-admin-subheading'>Roles</h5>
            <label>
        <input
          type="radio"
          value="Apple"
          
        />
      Admin
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
      Goods Receipt Supervisor
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
      Goods Receipt Receiver
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
     Quality Inspection Supervisor
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
    PutAway Supervisor
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
     Product Mover
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
    Pick Supervisor
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
     Picker
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
      Packing Supervisor
      </label><br />
      <label>
        <input
          type="radio"
          value="Apple"
          
        />
    Packer
      </label><br />
            </Col>
            <Col lg={4}>
            <div className="table-responsive" >
              <Table  style={{height:"200px"}}>
                <thead className="bg-secondary size-sm common-thead-body-scroll">
                  <tr className="common-table-thead">
                    <th>Name</th>
                    <th>Designation</th>
                    <th>  Head Quater</th>
                    <th>Roles</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>

                  </tr>
                </tbody>
              </Table>
            </div>
            </Col>
          </Row>
         </Container>
        ) }
      </div>
        </Container>
       
        </div>
  )
}

export default AdminUsermanagement