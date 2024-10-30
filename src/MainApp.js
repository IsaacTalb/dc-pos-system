// src/MainApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import Customers from './components/Customers';
import Reports from './components/Reports';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Button, CssBaseline } from '@mui/material';
import { Dashboard, ShoppingCart, Inventory2, People, BarChart } from '@mui/icons-material';
import { motion } from 'framer-motion';

const drawerWidth = 240;

const MainApp = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  if (!isAuthenticated) {
    return <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>Log In</Button>;
  }

  return (
    <Router>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" style={{ padding: '10px 0' }}>
              Duck Cloud POS Services
            </Typography>
          </Toolbar>
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <Avatar alt={user.name} src={user.picture} style={{ margin: 'auto', width: 80, height: 80 }} />
            <Typography variant="h6" style={{ marginTop: '10px' }}>{user.name}</Typography>
            <Typography variant="body2">{user.email}</Typography>
          </div>
          <List>
            <Link to="/sales" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <ShoppingCart />
                    </motion.div>
                </ListItemIcon>
                <ListItemText primary="Sales" />
              </ListItem>
            </Link>
            <Link to="/inventory" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Inventory2 />
                    </motion.div>
                </ListItemIcon>
                <ListItemText primary="Inventory" />
              </ListItem>
            </Link>
            <Link to="/customers" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <People />
                    </motion.div>
                </ListItemIcon>
                <ListItemText primary="Customers" />
              </ListItem>
            </Link>
            <Link to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <BarChart />
                    </motion.div>
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
            </Link>
          </List>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: '10px' }}
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </Button>
        </Drawer>

        {/* Main Content */}
        <div style={{ flexGrow: 1, padding: '24px' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Welcome to Duck Cloud POS Dashboard</Typography>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/sales" element={<Sales />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports />} />
            {/* Additional routes can go here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MainApp;