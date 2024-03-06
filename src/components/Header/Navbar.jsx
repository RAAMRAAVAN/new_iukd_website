import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const NavBar = () => {
  let Navigate=useNavigate();
  const [servicesMenuAnchor, setServicesMenuAnchor] = useState(null);
  const [departmentsMenuAnchor, setDepartmentsMenuAnchor] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleServicesMenuOpen = (event) => {
    setServicesMenuAnchor(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesMenuAnchor(null);
  };

  const handleDepartmentsMenuOpen = (event) => {
    setDepartmentsMenuAnchor(event.currentTarget);
  };

  const handleDepartmentsMenuClose = () => {
    setDepartmentsMenuAnchor(null);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const isServicesMenuOpen = Boolean(servicesMenuAnchor);
  const isDepartmentMenuOpen = Boolean(departmentsMenuAnchor);
  const buttonStyle = { fontWeight: 'bold', fontSize: '13px' };

  const drawerContent = (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'darkblue' }}>
      <IconButton
        color="inherit"
        aria-label="close drawer"
        onClick={toggleDrawer(false)}
        sx={{ marginLeft: 'auto', marginTop: '16px', marginRight: '16px' }}
      >
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button onClick={handleServicesMenuOpen}>
          <ListItemText primary="Services" />
        </ListItem>
        <Menu
          anchorEl={servicesMenuAnchor}
          open={isServicesMenuOpen}
          onClose={handleServicesMenuClose}
          sx={{padding:"10px"}}
        >
          <MenuItem onClick={handleServicesMenuClose} sx={{"&:hover":{backgroundColor:"blue"}}}>Endo Urological Surgeries</MenuItem>
          <MenuItem onClick={handleServicesMenuClose} sx={{"&:hover":{backgroundColor:"blue"}}}>Laparoscopic Uro Surgeries</MenuItem>
          <MenuItem onClick={handleServicesMenuClose} sx={{"&:hover":{backgroundColor:"blue"}}}>Reconstructive Surgeries</MenuItem>
          <MenuItem onClick={handleServicesMenuClose} sx={{"&:hover":{backgroundColor:"blue"}}}>Urological Cancer Clinic</MenuItem>
          <MenuItem onClick={handleServicesMenuClose} sx={{"&:hover":{backgroundColor:"blue"}}}>Male & Female Urinary Problem</MenuItem>
          <MenuItem onClick={handleServicesMenuClose} sx={{"&:hover":{backgroundColor:"blue"}}}>Male Fertility & Sexual Problem</MenuItem> 
        </Menu>

        <ListItem button onClick={handleDepartmentsMenuOpen}>
          <ListItemText primary="Departments" />
        </ListItem>
        <Menu
          anchorEl={departmentsMenuAnchor}
          open={isDepartmentMenuOpen}
          onClose={handleDepartmentsMenuClose}
        >
          <MenuItem onClick={handleDepartmentsMenuClose}>Urology</MenuItem>
          <MenuItem onClick={handleDepartmentsMenuClose}>Surgery</MenuItem>
        </Menu>

        <ListItem button>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Outreach OPDs" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Careers" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      {/* Drawer Icon for Mobile */}
      <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm:'none'} }}
        >
          <MenuIcon />
        </IconButton>
       <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        {drawerContent}
      </Drawer>
    <AppBar position="static" sx={{ backgroundColor: 'darkblue', display: { sm: 'block',  xs:'none', } }}>
      <Toolbar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor:"pointer" }} onClick={()=>Navigate("/")}>
          iUKD
        </Typography>

        {/* Buttons for Desktop */}
        <Button color="inherit" style={buttonStyle} onClick={()=>Navigate("/about")}>
          About Us
        </Button>
        <Button color="inherit" style={buttonStyle} onClick={handleServicesMenuOpen}>
          Services {isServicesMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </Button>
        <Menu
          anchorEl={servicesMenuAnchor}
          open={isServicesMenuOpen}
          onClose={handleServicesMenuClose}
        >
          <MenuItem onClick={()=>{Navigate("/endourologicalsurgeries");handleServicesMenuClose()}} sx={{borderRadius:"5px",marginX:"5px","&:hover":{backgroundColor:"blue", color:"white"}}}>Endo Urological Surgeries</MenuItem>
          <MenuItem onClick={()=>{Navigate("/laparoscopicurosurgeries");handleServicesMenuClose()}} sx={{borderRadius:"5px",marginX:"5px","&:hover":{backgroundColor:"blue", color:"white"}}}>Laparoscopic Uro Surgeries</MenuItem>
          <MenuItem onClick={()=>{Navigate("/reconstructivesurgeries");handleServicesMenuClose()}} sx={{borderRadius:"5px",marginX:"5px","&:hover":{backgroundColor:"blue", color:"white"}}}>Reconstructive Surgeries</MenuItem>
          <MenuItem onClick={()=>{Navigate("/urologicalcancerclinic");handleServicesMenuClose()}} sx={{borderRadius:"5px",marginX:"5px","&:hover":{backgroundColor:"blue", color:"white"}}}>Urological Cancer Clinic</MenuItem>
          <MenuItem onClick={()=>{Navigate("/malefemaleurinaryproblem");handleServicesMenuClose()}} sx={{borderRadius:"5px",marginX:"5px","&:hover":{backgroundColor:"blue", color:"white"}}}>Male & Female Urinary Problem</MenuItem>
          <MenuItem onClick={()=>{Navigate("/malefertilitysexualproblem");handleServicesMenuClose()}} sx={{borderRadius:"5px",marginX:"5px","&:hover":{backgroundColor:"blue", color:"white"}}}>Male Fertility & Sexual Problem</MenuItem> 
        </Menu>
        <Button color="inherit" style={buttonStyle} onClick={handleDepartmentsMenuOpen}>
          Departments {isDepartmentMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </Button>
        <Menu
          anchorEl={departmentsMenuAnchor}
          open={isDepartmentMenuOpen}
          onClose={handleDepartmentsMenuClose}
        >
          <MenuItem onClick={()=>{Navigate("/urology");handleDepartmentsMenuClose()}} sx={{borderRadius:"5px",marginX:"5px","&:hover":{backgroundColor:"blue", color:"white"}}}>Urology</MenuItem>
          <MenuItem onClick={()=>{Navigate("/surgery"); handleDepartmentsMenuClose()}} sx={{borderRadius:"5px",marginX:"5px","&:hover":{backgroundColor:"blue", color:"white"}}}>Surgery</MenuItem>
        </Menu>

        <Button color="inherit" style={buttonStyle} onClick={()=>Navigate("/outreachopds")}>
          Outreach OPDs
        </Button>
        <Button color="inherit" style={buttonStyle} onClick={()=>Navigate("/contact")}>
          Contact
        </Button>
        <Button color="inherit" style={buttonStyle} onClick={()=>Navigate("/careers")}>
          Careers
        </Button>

        {/* Drawer for Mobile */}
      </Toolbar>
    </AppBar>
    </Box>
  );
};
