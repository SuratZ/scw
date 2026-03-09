import { AppBar, Toolbar, Typography, Button, Box, Drawer, Container } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react";
import { PhoneInTalk } from "@mui/icons-material";

interface MenuItem {
  id: number;
  label: string;
  path: string;
  isActive: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "About",
    path: "/about",
    isActive: false,
  },
  {
    id: 2,
    label: "Services",
    path: "/services",
    isActive: false
  },
  {
    id: 3,
    label: "Verify Cert.",
    path: "/verify-cert",
    isActive: false
  },
  {
    id: 4,
    label: "Contact",
    path: "/contact",
    isActive: false
  }
];


export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menus, setMenus] = useState(menuItems);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (id: number) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.id === id ? { ...menu, isActive: true } : { ...menu, isActive: false }
      )
    );
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setMobileOpen(false)}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Menu
      </Typography>
        {menus.map((item,index) => (
          <Box key={index} pb={2} pl={2}>
            <Button key={item.label} component={RouterLink} to={item.path}
            sx={{ color: 'inherit', borderBottom: item.isActive ? '2px solid #EAD292' : 'none' }}
            onClick={() => {handleMenuItemClick(item.id)}}>
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
        onClick={()=>setMenus(menuItems)}
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
        {menus.map((item) => (
          <Button key={item.label} color="inherit" component={RouterLink} to={item.path}
          sx={{ borderBottom: item.isActive ? '2px solid #EAD292' : 'none' }}
            onClick={() => {handleMenuItemClick(item.id)}}>
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