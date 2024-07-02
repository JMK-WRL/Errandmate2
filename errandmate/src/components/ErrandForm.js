import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem } from '@material-ui/core';

function ErrandForm() {
    const [formData, setFormData] = useState({
        description: '',
        category: '',
        location: '',
        deadline: '',
        instructions: '',
    });

    const { description, category, location, deadline, instructions } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        // Handle errand posting
    };

    return (
        <Container>
            <Typography variant="h4">Post an Errand</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    label="Description"
                    name="description"
                    value={description}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Category"
                    name="category"
                    value={category}
                    onChange={onChange}
                    select
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="groceries">Groceries</MenuItem>
                    <MenuItem value="pharmacy">Pharmacy</MenuItem>
                    <MenuItem value="postal">Postal Services</MenuItem>
                    <MenuItem value="drycleaning">Dry Cleaning</MenuItem>
                </TextField>
                <TextField
                    label="Location"
                    name="location"
                    value={location}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Deadline"
                    name="deadline"
                    type="date"
                    value={deadline}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Instructions"
                    name="instructions"
                    value={instructions}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Post
                </Button>
            </form>
        </Container>
    );
}

export default ErrandForm;
