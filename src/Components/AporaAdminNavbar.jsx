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

function AporaAdminNavbar() {
    const navigate=useNavigate('')
    const handleHome=()=>{
        navigate('/adminhomepage')
    }
    const handleUsermanagement=()=>{
      navigate('/adminusermanagement')
    }
    const handleFecilitymanagement=()=>{
      navigate('/adminfecilitymanagement')
    }
    const handleItemmanagement=()=>{
      navigate('/adminitemmanagement')
    }
  return (
    <div>
         <Navbar expand="lg" style={{height:"35px"}} className='common-navbar'>
      <Container fluid>
        <Navbar.Brand ><img src={PurveyLogo} alt="" style={{height:"30px",cursor:"pointer"}} /> <span className='wms-navbar' style={{cursor:"pointer"}}>WMS</span></Navbar.Brand>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
            <Nav.Link  className='wms-sidenavbar' onClick={handleHome}>  <img src={GRIcon3} style={{height:"20px",cursor:"pointer"}} alt="" /> Home </Nav.Link>
            <Nav.Link  className='wms-sidenavbar' onClick={handleUsermanagement}>  <img src={ItemMasterIcon1} style={{height:"20px",cursor:"pointer"}} alt="" /> User Management</Nav.Link>
            <Nav.Link className='wms-sidenavbar' onClick={handleFecilitymanagement}> <img src={VendorIcon1} style={{height:"20px",cursor:"pointer"}} alt="" /> Fecility Management</Nav.Link>
            <Nav.Link  className='wms-sidenavbar' onClick={handleItemmanagement}> <img src={VendorProductIcon5} style={{height:"20px",cursor:"pointer"}} alt="" /> Item Category </Nav.Link>
            {/* <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} style={{color:"green",fontSize:"20px"}}/></Nav.Link> */}
            <Nav.Link ><FontAwesomeIcon icon={faPowerOff} style={{color:"green",fontSize:"20px"}}/></Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AporaAdminNavbar