import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/actions/userActions';
import { Button, TextField, Container, Typography } from '@material-ui/core';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const [formData, setFormData] = useState({
        name: user.name || '',
        email: user.email || ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(formData));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Profile</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Profile
                </Button>
            </form>
        </Container>
    );
};

export default Profile;
