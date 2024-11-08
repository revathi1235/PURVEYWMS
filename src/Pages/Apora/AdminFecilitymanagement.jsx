import React from 'react'
import AporaAdminNavbar from '../../Components/AporaAdminNavbar'
import { Row,Col, Container } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
function AdminFecilitymanagement() {
  const [selectedValue, setSelectedValue] = useState("A"); // To track the selected radio button

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
    <AporaAdminNavbar />
    <Container>
        <Row className='mt-3'>
            <Col lg={4}>
                <label>
                    <input
                        type="radio"
                        value="A"
                        checked={selectedValue === "A"}
                        onChange={handleRadioChange}
                    />
                    Add Warehouse
                </label>
            </Col>
            <Col lg={4}>
                <label style={{ marginLeft: "10px" }}>
                    <input
                        type="radio"
                        value="B"
                        checked={selectedValue === "B"}
                        onChange={handleRadioChange}
                    />
                    Add Department and Sub-Department
                </label>
            </Col>
            <Col lg={4}>
                <label style={{ marginLeft: "10px" }}>
                    <input
                        type="radio"
                        value="C" // Ensure this value is unique for "Add Facilities"
                        checked={selectedValue === "C"}
                        onChange={handleRadioChange}
                    />
                    Add Facilities
                </label>
            </Col>
        </Row>
    </Container>
    <Container>
        <h5 className='materialinward-heading'>Warehouse Addition</h5>
        <div style={{ marginTop: "20px" }}>
            {selectedValue === "A" && (
                <Container>
                    <Row>
                        <Col lg={3}>
                            <FloatingLabel label="Warehouse ID" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Warehouse Name" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Warehouse Address" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Administrator Name" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Administrator Mail ID" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Phone" className="floating-label-custom">
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Business License Number" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>

                            <Row className="justify-content-center mt-4">
                                <Col xs="auto">
                                    <button className='apora-button'>Save</button>
                                    <button className='apora-button-cancel ms-3'>Cancel</button>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={1}></Col>
                        <Col lg={8}>
                            <div className="table-responsive">
                                <Table className="mt-3" style={{ height: "200px" }}>
                                    <thead className="bg-secondary size-sm">
                                        <tr className="common-table-thead">
                                            <th></th>
                                            <th>Assign Settings</th>
                                            <th>Warehouse ID</th>
                                            <th>Warehouse Name</th>
                                            <th>Warehouse Address</th>
                                            <th>Administrator Name</th>
                                            <th>Administrator Mail ID</th>
                                            <th>Phone</th>
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
                        <Col lg={3}>
                            <FloatingLabel label="Warehouse Name" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Warehouse ID" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Department Name" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>

                            <Row className="justify-content-center mt-4">
                                <Col xs="auto">
                                    <button className='apora-button'>Save</button>
                                    <button className='apora-button-cancel ms-3'>Cancel</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={8}>
                            <div className="table-responsive">
                                <Table className="mt-3" style={{ height: "200px" }}>
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
                    <h5 className='materialinward-heading mt-3'>Sub-Department   Addition</h5>
                    <Row>
                        <Col lg={3}>
                            <FloatingLabel label="Warehouse Name" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Warehouse ID" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Department Name" className="floating-label-custom">
                                <Form.Control
                                    type="input"
                                    placeholder="name@example.com"
                                    className="common-fields common-fields-bug"
                                />
                            </FloatingLabel>

                            <Row className="justify-content-center mt-4">
                                <Col xs="auto">
                                    <button className='apora-button'>Save</button>
                                    <button className='apora-button-cancel ms-3'>Cancel</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={8}>
                            <div className="table-responsive">
                                <Table className="mt-3" style={{ height: "200px" }}>
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
            )}

            {selectedValue === "C" && (
                <Container>
                       
                    <Row>
                        <Col lg={4} style={{height:"250px",overflow:"scroll"}}>
                            <h5 className='apora-admin-subheading'>Zone Addition</h5>
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
      </Row>

      <div className="table-responsive mt-5">
                                <Table className="mt-3" style={{ height: "200px" }}>
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
                        <Col lg={4} style={{height:"250px",overflow:"scroll"}}>
                            <h5 className='apora-admin-subheading'>Row Addition</h5>
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
      </Row>

      <div className="table-responsive mt-5">
                                <Table className="mt-3" style={{ height: "200px" }}>
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
                       
                        <Col lg={4}  style={{height:"250px",overflow:"scroll"}}>
                            <h5 className='apora-admin-subheading'>Row Addition</h5>
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
      </Row>

      <div className="table-responsive mt-5">
                                <Table className="mt-3" style={{ height: "200px" }}>
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
                    <Row className='mt-5'>
                    <Col lg={6} style={{height:"250px",overflow:"scroll"}}>
                            <h5 className='apora-admin-subheading'>Row Addition</h5>
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
      </Row>

      <div className="table-responsive mt-5">
                                <Table className="mt-3" style={{ height: "200px" }}>
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
                       
                        <Col lg={6}  style={{height:"250px",overflow:"scroll"}}>
                            <h5 className='apora-admin-subheading'>Row Addition</h5>
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
      </Row>

      <div className="table-responsive mt-5">
                                <Table className="mt-3" style={{ height: "200px" }}>
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
            )}
        </div>
    </Container>
</div>

  )
}

export default AdminFecilitymanagement