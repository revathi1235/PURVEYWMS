import React ,{useState,useEffect,useRef }from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import PurveyLogo from "../../Assets/PurveyLogo.png";
import { useNavigate } from 'react-router-dom';
import '../../Components/common.css';
function Picksupervisor() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
  
    const handleLogout = () => {
      navigate('/');
    };
  
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
  
    // Function to close the navbar when clicking outside
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    // Effect to handle clicks outside of the navbar
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);



    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div className='stickynavbar'>
     <Navbar expand="lg" style={{height:"35px"}} className='common-navbar'>
      <Container fluid className='common-navbar'>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
      <FontAwesomeIcon icon={faChevronDown} onClick={handleShow}/>
        <Navbar.Brand ><img src={PurveyLogo} alt="" style={{height:"30px",cursor:"pointer"}}    /> <span className='wms-navbar' style={{cursor:"pointer"}} >APORA</span></Navbar.Brand>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
            <Nav.Link  className='wms-sidenavbar'> 
                 {/* <img src={GRIcon3} style={{height:"20px",cursor:"pointer"}} alt="" />  */}
               Dashboard</Nav.Link>
            <Nav.Link  className='wms-sidenavbar'> 
                 {/* <img src={ItemMasterIcon1} style={{height:"20px",cursor:"pointer"}} alt="" /> */}
               PickList</Nav.Link>

            {/* <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} style={{color:"green",fontSize:"20px"}}/></Nav.Link> */}
            <Nav.Link onClick={handleLogout}>
                <FontAwesomeIcon icon={faPowerOff} style={{color:"green",fontSize:"20px"}}/>
                </Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>


   {/* ===============off canvas navbar code ==================== */}
   <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    
  )
}

export default Picksupervisor