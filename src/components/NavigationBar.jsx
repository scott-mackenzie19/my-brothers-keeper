import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Brothers Keeper
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="inherit">Home</Button></Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="inherit">About</Button></Link>
        <Link to="/resources" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="inherit">Resources</Button></Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="inherit">Contact</Button></Link>
        <Link to="/donate" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="inherit">Donate</Button></Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
