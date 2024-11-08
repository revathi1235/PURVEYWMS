// import React ,{useState,useEffect,useRef }from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Container } from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faPowerOff } from '@fortawesome/free-solid-svg-icons';
// import PurveyLogo from "../../Assets/PurveyLogo.png";
// import { useNavigate } from 'react-router-dom';
// import '../../Components/common.css';
// function Picksupervisor() {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);
//     const navbarRef = useRef(null);
  
//     const handleLogout = () => {
//       navigate('/');
//     };
  
//     const handleToggle = () => {
//       setIsOpen((prev) => !prev);
//     };
  
//     // Function to close the navbar when clicking outside
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
  
//     // Effect to handle clicks outside of the navbar
//     useEffect(() => {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }, []);



//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>
//         <div className='stickynavbar'>
//      <Navbar expand="lg" style={{height:"35px"}} className='common-navbar'>
//       <Container fluid className='common-navbar'>
//       {/* <Button variant="primary" onClick={handleShow}>
//         Launch
//       </Button> */}
//       <FontAwesomeIcon icon={faChevronDown} onClick={handleShow}/>
//         <Navbar.Brand ><img src={PurveyLogo} alt="" style={{height:"30px",cursor:"pointer"}}    /> <span className='wms-navbar' style={{cursor:"pointer"}} >APORA</span></Navbar.Brand>
     
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
//         <Navbar.Collapse id="basic-navbar-nav">
          
//           <Nav className="ms-auto">
//             <Nav.Link  className='wms-sidenavbar'> 
//                  {/* <img src={GRIcon3} style={{height:"20px",cursor:"pointer"}} alt="" />  */}
//                Dashboard</Nav.Link>
//             <Nav.Link  className='wms-sidenavbar'> 
//                  {/* <img src={ItemMasterIcon1} style={{height:"20px",cursor:"pointer"}} alt="" /> */}
//                PickList</Nav.Link>

//             {/* <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} style={{color:"green",fontSize:"20px"}}/></Nav.Link> */}
//             <Nav.Link onClick={handleLogout}>
//                 <FontAwesomeIcon icon={faPowerOff} style={{color:"green",fontSize:"20px"}}/>
//                 </Nav.Link>
             
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//    </div>


//    {/* ===============off canvas navbar code ==================== */}
//    <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </div>
    
//   )
// }

// export default Picksupervisor
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';

import React, { useState } from 'react';
import PurveyLogo from "../../Assets/PurveyLogo.png";
import Navbar from 'react-bootstrap/Navbar';
import { Container,Row,Col } from 'react-bootstrap';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isVisible,setIsvisible]=useState(false)
  const [isDashboard,setIsdashboard]=useState('dashboard')
  const navigate=useNavigate()
const handlePicklist=()=>{
  setIsvisible(true)
  setIsdashboard(false)
}
const handleDashboard=()=>{
    navigate('/picksupervisor')
}
const [selected, setSelected] = useState(null);

const handleClick = (text) => {
  setSelected(text);
};
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar  style={{backgroundColor: "rgb(156, 153, 153)"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Navbar.Brand ><img src={PurveyLogo} alt="" style={{height:"30px",cursor:"pointer"}}    /> <span className='wms-navbar' style={{cursor:"pointer"}} >APORA</span></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link  className='wms-sidenavbar' onClick={handleDashboard}> 
               {/* <img src={GRIcon3} style={{height:"20px",cursor:"pointer"}} alt="" /> */}
                Dashboard </Nav.Link>
            <Nav.Link className='wms-sidenavbar' onClick={handlePicklist}> 
               {/* <img src={ItemMasterIcon1} style={{height:"20px",cursor:"pointer"}} alt="" />  */}
               Picklist</Nav.Link>
           
            {/* <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} style={{color:"green",fontSize:"20px"}}/></Nav.Link> */}
            <Nav.Link ><FontAwesomeIcon icon={faPowerOff} style={{color:"green",fontSize:"20px"}}/></Nav.Link>
             
          </Nav>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
  {['Key', 'Picklist'].map((text, index) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      <Button className='mt-5'
        variant="success"  onClick={() => handleClick(text)}
        style={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
      
        <ListItemText primary={text} />
      </Button>
    </ListItem>
  ))}
</List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
       
      
     

























        {/* ========================pist list divs========================== */}
        <Container>
        <Row className="mt-4">
          <Col lg={12}>
            {selected === 'Key' && (
                <div>
                     <h5 className="materialinward-heading">Process Information</h5>
                <h6 className="materialinward-heading">Key List Data View</h6>
               <Button variant='success'> Initiate</Button>
               <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
                </div>
                 )}
            {selected === 'Picklist' && (
                 <div>
                 <h5 className="materialinward-heading">Process Information</h5>
            <h6 className="materialinward-heading">Key List Data View</h6>
           <Button variant='success'> Initiate</Button>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</Table>
            </div>
            )}
          </Col>
        </Row>
      </Container>
     
      </Box>
    </Box>
  );
}
