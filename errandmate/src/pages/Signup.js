import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        // Handle user registration
    };

    return (
        <Container>
            <Typography variant="h4">Sign Up</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Container>
    );
}

export default Signup;
