// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@material-ui/core';
import './Home.css'; // Ensure you create a corresponding CSS file for styling

const Home = () => {
    return (
        <Container maxWidth="lg" className="home-container">
            <Box className="hero-section">
                <Typography variant="h2" className="hero-title">
                    Welcome to ErrandMate
                </Typography>
                <Typography variant="h5" className="hero-subtitle">
                    Your go-to solution for managing errands efficiently.
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/signup" className="hero-button">
                    Get Started
                </Button>
                <Button variant="outlined" color="secondary" component={Link} to="/login" className="hero-button">
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
