import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff} from '@fortawesome/free-solid-svg-icons';
import PurveyLogo from "../Assets/PurveyLogo.png";
import { useNavigate } from 'react-router-dom';
import GRIcon3 from '../Assets/GRIcon3.png'
import ItemMasterIcon1 from '../Assets/ItemMasterIcon1.png'
import VendorIcon1 from '../Assets/VendorIcon1.png'
import VendorProductIcon5 from '../Assets/VendorProductIcon5.png'
function BasicExample() {
  const navigate=useNavigate()
  const handleGoodsreceipt=()=>{
    navigate('/materialinward')
  }
  const handleProductmaster=()=>{
    navigate('/productmaster')
  }
  const handleVendormaster=()=>{
    navigate('/vendormaster')
  }
  const handleVendorproduct=()=>{
    navigate('/vendorproducts')
  }
  const handleLogout=()=>{
    navigate('/')
  }
  const handleLogo=()=>{
    navigate('/materialinward')
  }

  return (
   <div className='stickynavbar'>
     <Navbar expand="lg" style={{height:"35px"}} className='common-navbar'>
      <Container fluid className='common-navbar'>
        <Navbar.Brand ><img src={PurveyLogo} alt="" style={{height:"30px",cursor:"pointer"}} onClick={handleLogo}/> <span className='wms-navbar' style={{cursor:"pointer"}} onClick={handleLogo}>WMS</span></Navbar.Brand>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
            <Nav.Link onClick={handleGoodsreceipt} className='wms-sidenavbar'>  <img src={GRIcon3} style={{height:"20px",cursor:"pointer"}} alt="" /> Goods Receipt </Nav.Link>
            <Nav.Link onClick={handleProductmaster} className='wms-sidenavbar'>  <img src={ItemMasterIcon1} style={{height:"20px",cursor:"pointer"}} alt="" /> Product Master</Nav.Link>
            <Nav.Link onClick={handleVendormaster} className='wms-sidenavbar'> <img src={VendorIcon1} style={{height:"20px",cursor:"pointer"}} alt="" /> Vendor Master </Nav.Link>
            <Nav.Link onClick={handleVendorproduct} className='wms-sidenavbar'> <img src={VendorProductIcon5} style={{height:"20px",cursor:"pointer"}} alt="" /> Vendor Product</Nav.Link>
            {/* <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} style={{color:"green",fontSize:"20px"}}/></Nav.Link> */}
            <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faPowerOff} style={{color:"green",fontSize:"20px"}}/></Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default BasicExample;