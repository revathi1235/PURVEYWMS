import React from "react";
import { Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./common.css";
import Table from "react-bootstrap/Table";
import Select from "react-select";
import Navbar from '../Components/Navbar'

function VendorMaster() {
  return (
    <div className='gradient-border '>
      <Navbar/>
      <Container>
        <Row className="mt-4">
          <Col lg={12}>
            <h5 className="materialinward-heading">Vendor Master</h5>
          </Col>
        </Row>
      </Container>
      {/* ------------------------ */}
      <Container>
        <Row>
          <Col lg={6} className="mt-5">
            <h5 className="materialinward-heading"> Add New Vendor </h5>
            <Row>
              <Col lg={6}>
                <div className="mt-5    ">
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Vendor Name"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Address">
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="City">
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="province ">
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Country">
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Contact Number"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <Button variant="success" className="mt-5">
                    Add
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="mt-5">
            <h5 className="materialinward-heading">Vendor List </h5>
            <Row>
              <Col lg={5}>
                <Select />
              </Col>
            </Row>
            <div className="table-responsive">
              <Table className="mt-3">
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Vendor ID</th>
                    <th>Vendor Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Province</th>
                    <th>Country</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VendorMaster;
