import React from 'react'
import AporaAdminNavbar from '../../Components/AporaAdminNavbar'
import {Row,Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import PieChartExample from './Piechart1';
import BarChartExample from './Barchart';
import Select from 'react-select';
function AdminHomepage() {
  return (
    <div>
        <AporaAdminNavbar/>
       <Container fluid>
       <Row >
            <Col lg={3} className='mt-4'>
            <div>
      <p style={{ display: 'inline', marginRight: '20px' }}>Vendor ID's</p>
      <span>GR ID's</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <PieChartExample />
        </div>
        <button className='common-button'>Download Chart</button>
            </Col>
            <Col lg={9}>
            <button className='common-button'>Download CSV</button>
            <div className="table-responsive">
              <Table className="mt-3">
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Vendor ID</th>
                    <th>Vendor Name</th>
                    <th>Total Quantity</th>
                    <th>Accepted Quantity</th>
                    <th>Rejected Quantity</th>
                    <th>Accepted Rate</th>
                    <th>Rejected Rate</th> 
                    <th>Rejected Date</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>   tf    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            </Col>
            
        </Row>


        {/* --------------- 2----------------------------- */}
      <div className='mt-5'>
      <Row >
            <Col lg={3} >
           
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PieChartExample />
        </div>
        <button className='common-button'>Download Chart</button>
            </Col>
            <Col lg={9}>
            <button className='common-button'>Download CSV</button>
            <div className="table-responsive">
              <Table className="mt-3">
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Vendor ID</th>
                    <th>Vendor Name</th>
                    <th>Total Quantity</th>
                    <th>Accepted Quantity</th>
                    <th>Rejected Quantity</th>
                    <th>Accepted Rate</th>
                    <th>Rejected Rate</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>   tf    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            </Col>
        </Row>
      </div>

      {/* ------------------------  3---------------------------------- */}

    <Row>
        <Col  lg={6} className='mt-5'>
        <div className="table-responsive">
              <Table >
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Product ID</th>
                    <th>Product Name</th>
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
        <Col lg={6}>
        <BarChartExample/>
        </Col>
    </Row>

    {/* ---------------------  4  ------------------- */}
    <Row className='mt-5'>
        <Col lg={12}>

        <h5 className='materialinward-heading'> GR Item Wise Serialization </h5>
    
        <Row className="mb-4">
          <Col lg={1}></Col>
        <Col lg={2}>
          <Select
            // options={vendorOptions}
            placeholder="Select Vendor ID"
          />
        </Col>
        <Col lg={2}>
          <Select
            // options={vendorOptions}
            placeholder="Select Vendor Name"
          />
        </Col>
        <Col lg={2}>
          <Select
            // options={invoiceOptions}
            placeholder="Select Invoice No"
          />
        </Col>
        <Col lg={2}>
          <Select
            // options={invoiceOptions}
            placeholder="Select Invoice Date"
          />
        </Col>
        <Col lg={2}>
          <Select
            // options={invoiceOptions}
            placeholder="Select Purchase Order Date"
          />
        </Col>
        <Col lg={1}></Col>
        </Row>
        <button className='common-button mb-1'>Download Chart</button>
        <div className="table-responsive">
      
              <Table >
                <thead className="bg-secondary size-sm common-thead-body-scroll">
                  <tr className="common-table-thead">
                    <th> GR No</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Category Name</th>
                    <th>Batch</th>
                    <th>Manufacturing Date</th>
                    <th>Expairy Date</th>
                    <th>Labeled Date</th>
                    <th>Quantity Labeled</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>h</td>
                  </tr>
                </tbody>
              </Table>
            </div>  
        </Col>
    </Row>


    {/* -----------------------5------------------- */}
    <Row className='mt-5'>
    <h5 className='materialinward-heading'>Planogram Current Stock Level </h5>
    <Col lg={3}></Col>
      <Col lg={3}>
      <Select
            // options={invoiceOptions}
            placeholder="Select Product ID"
          />
      </Col>
      <Col lg={3}>
      <Select
            // options={invoiceOptions}
            placeholder="Select Product Name"
          />
      </Col>
      </Row>
      <button className='common-button mb-1'>Download Chart</button>
      <div className="table-responsive">
      
              <Table >
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Zone</th>
                    <th>Rack</th>
                    <th>Level</th>
                    <th>Tote </th>
                    <th>Current Stock Level</th>
                    <th>Tote ID</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>1</td>
                    <td>Mark</td>
                   
                  </tr>
                </tbody>
              </Table>
            </div> 
    
       </Container>

     
    </div>
  )
}

export default AdminHomepage