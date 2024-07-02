// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  color: 'inherit',
  '&:hover': {
    backgroundColor: '#ffffff33', // Change the background color on hover
  },
});

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ErrandMate
        </Typography>
        <StyledButton component={Link} to="/">Home</StyledButton>
        <StyledButton component={Link} to="/login">Login</StyledButton>
        <StyledButton component={Link} to="/signup">Signup</StyledButton>
        <StyledButton component={Link} to="/profile">Profile</StyledButton>
        <StyledButton component={Link} to="/dashboard">Dashboard</StyledButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;