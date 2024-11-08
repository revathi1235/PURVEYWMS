import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AporaAdminNavbar from '../../Components/AporaAdminNavbar';
import Table from 'react-bootstrap/Table';

function AdminItemmanagement() {
  return (
    <div>
        <AporaAdminNavbar/>
        
      <Container>
      <h5 className='materialinward-heading mt-5'>New Item Category</h5>

      <Row className='mt-5'>
                    <Col lg={6}>
                           
                            <FloatingLabel label="Warehouse Name" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Zone ID" className="floating-label-custom">
            <Form.Control
              type="password"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Zone Name" className="floating-label-custom">
            <Form.Control
              type="password"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <button className='apora-button'>Save</button>
          <button className='apora-button-cancel ms-3'>Cancel</button>

        </Col>
        <Col lg={5}>
        
        </Col>
      </Row>

    
                        </Col>
                       <Col lg={6}>
                       <div className="table-responsive">
                                <Table  style={{ height: "200px" }}>
                                    <thead className="bg-secondary size-sm">
                                        <tr className="common-table-thead">
                                            <th>Department ID</th>
                                            <th>Department Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                       </Col>
                        
                    </Row>
      </Container>
      <Container>
      <h5 className='materialinward-heading mt-4'>New Item Sub- Category</h5>

      <Row className='mt-5'>
                    <Col lg={6}>
                           
                            <FloatingLabel label="Warehouse Name" className="floating-label-custom">
            <Form.Control
              type="input"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Zone ID" className="floating-label-custom">
            <Form.Control
              type="password"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <FloatingLabel label="Zone Name" className="floating-label-custom">
            <Form.Control
              type="password"
              placeholder="name@example.com"
              className="common-fields common-fields-bug"
            />
          </FloatingLabel>
          <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <button className='apora-button'>Save</button>
          <button className='apora-button-cancel ms-3'>Cancel</button>

        </Col>
        <Col lg={5}>
        
        </Col>
      </Row>

    
                        </Col>
                       <Col lg={6}>
                       <div className="table-responsive">
                                <Table  style={{ height: "200px" }}>
                                    <thead className="bg-secondary size-sm">
                                        <tr className="common-table-thead">
                                            <th>Department ID</th>
                                            <th>Department Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                       </Col>
                        
                    </Row>
      </Container>
    </div>
  )
}

export default AdminItemmanagement