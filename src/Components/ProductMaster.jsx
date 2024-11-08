import React from 'react'
import {Row,Col} from 'react-bootstrap'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './common.css'
import Table from 'react-bootstrap/Table';
import Select from 'react-select'
import Navbar from '../Components/Navbar'

function ProductMaster() {
  return (
    <div className="gradient-border">
      <Navbar/>
        <Container >
        <Row className='mt-4'>
           
            <Col lg={12}>
            <h5 className='materialinward-heading'>Product Master</h5>
            </Col>
            
        </Row>
        </Container> 
        {/* ------------------------ */}
        <Container>
            <Row>
                <Col lg={6} className='mt-5'>
                <h5 className='materialinward-heading'> Add Products </h5>
              <Row>
                <Col lg={6}>
                <div className='mt-5    '>
                <FloatingLabel controlId="floatingPassword" label="Product Name">
              <Form.Control  className="common-fields"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Category ID">
              <Form.Control  className="common-fields"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Category Name">
              <Form.Control  className="common-fields"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Brand">
              <Form.Control  className="common-fields"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label=" Unit OF Measure (UOM)">
              <Form.Control  className="common-fields"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="SKU in Pack">
              <Form.Control  className="common-fields"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label=" Re-Order-Level">
              <Form.Control  className="common-fields"/>
            </FloatingLabel>
            <Button variant="success" className='mt-5'>Add</Button>{' '}
                </div>
                </Col>
               

              </Row>
                </Col>
                <Col lg={6} className='mt-5'>
                <h5 className='materialinward-heading'>Product List </h5>
               <Row>
                <Col lg={5}>
                <Select />
                </Col>
               </Row>
                <div className="table-responsive">
          <Table className='mt-3'>
            <thead className="bg-secondary size-sm">
              <tr className="common-table-thead">
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Batch</th>
                <th>Manufacturing Date</th>
                <th>Best Before</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <Button variant="secondary" className='bg-secondary text-white'>Cancel</Button>{' '}                </tr>
              
            </tbody>
          </Table>
        </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductMaster