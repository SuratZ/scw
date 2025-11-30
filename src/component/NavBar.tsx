import { AppBar, Toolbar, Typography, Button, Box, Drawer, Container } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react";
import { PhoneInTalk } from "@mui/icons-material";

const menuItems = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services"
  },
  {
    label: "Verify Cert.",
    path: "/verify-cert"
  },
  {
    label: "Contact",
    path: "/contact"
  }
];


export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setMobileOpen(false)}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Menu
      </Typography>
   
        {menuItems.map((item,index) => (
          <Box key={index} pb={2} pl={2}>
            <Button key={item.label} color="inherit" component={RouterLink} to={item.path}>
              {item.label}
            </Button>
          </Box>
        ))}
    </Box>
  );

  
  return (
    <AppBar position="sticky" sx={{bgcolor: '#012C4E', color: '#EAD292'}}>
      <Toolbar>
      <Box sx={{ flex: 3, display: 'flex' }}>
        <Button
        color="inherit"
        component={RouterLink}
        to="/home"
        sx={{ textTransform: 'none' }}
        aria-label="SCW Home"
        >
          <img src="./scw-logo.jpg" alt="SCW Logo" style={{ height: 40, width: 40, borderRadius: '50%' }} />
          <Container sx={{}}>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline', md: 'inline',lg: 'none' }, fontWeight: 'bold', fontSize: 24}}>
              {/* <img src="./scw-logo.jpg" alt="SCW Logo" style={{ height: 40, width: 40, marginRight: 8 }} /> */}
              SCW 
            </Box>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'inline' }, fontWeight: 'bold', fontSize: 24}}>
              {/* <img src="./scw-logo.jpg" alt="SCW Logo" style={{ height: 40, width: 40, marginRight: 8 }} /> */}
              SCW Certification
            </Box>
          </Container>
        </Button>
      </Box>
      <Box
        sx={{
        flex: 6,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 2,
        justifyContent: 'center',
        }}
      >
        {menuItems.map((item) => (
          <Button key={item.label} color="inherit" component={RouterLink} to={item.path}>
            {item.label}
          </Button>
        ))}
      </Box>
       
      {/* Mobile menu */}
      <Box sx={{ flex: 6, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
        <Button
          color="inherit"
          aria-label="menu"
          sx={{ minWidth: 0 }}
          onClick={handleDrawerToggle}
        >
          <span style={{ fontSize: 24 }}>☰</span>
        </Button>
      </Box>
      <Box sx={{ flex: 3, display: 'flex', justifyContent: ['flex-end','flex-end','flex-end',"flex-start"] }}>
        <Button
        variant="contained"
        color="error"
        href="tel:+66816455821"
        sx={{ textTransform: 'none',whiteSpace: ['nowrap','pre-wrap'],pr:[2,2] }}
        aria-label="Call SCW"
        >
          <Box sx={{display:['none','block'],position: 'relative', top: '3px'}}><PhoneInTalk /></Box>
          <Box>{"  Call Now"}</Box>
        </Button>      
      </Box>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {DrawerList}
      </Drawer>
      </Toolbar>
    </AppBar>
  );
}