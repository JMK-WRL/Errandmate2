import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        // Handle user login
    };

    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <form onSubmit={onSubmit}>
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
                    Login
                </Button>
            </form>
        </Container>
    );
}

export default Login;
