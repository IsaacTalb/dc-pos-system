// src/MainApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import Customers from './components/Customers';
import Reports from './components/Reports';
import { Button, Typography } from '@mui/material';

const MainApp = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to My POS App</h1>
        {isAuthenticated ? (
          <>
            <Typography variant="h4">Hello, {user.name}</Typography>
            <Typography variant="subtitle1">Email: {user.email}</Typography>
            <LogoutButton />

            {/* Navigation Links */}
            <nav>
              <Link to="/sales">
                <Button variant="contained" style={{ marginRight: '10px' }}>Sales</Button>
              </Link>
              <Link to="/inventory">
                <Button variant="contained" style={{ marginRight: '10px' }}>Inventory</Button>
              </Link>
              <Link to="/customers">
                <Button variant="contained" style={{ marginRight: '10px' }}>Customers</Button>
              </Link>
              <Link to="/reports">
                <Button variant="contained">Reports</Button>
              </Link>
            </nav>

            {/* Route Components */}
            <Routes>
              <Route path="/sales" element={<Sales />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/reports" element={<Reports />} />
              {/* Add other routes as necessary */}
            </Routes>
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </Router>
  );
};

export default MainApp;
