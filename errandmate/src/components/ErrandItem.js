import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

function ErrandItem({ errand }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{errand.description}</Typography>
                <Typography variant="subtitle1">{errand.category}</Typography>
                <Typography variant="body2">Location: {errand.location}</Typography>
                <Typography variant="body2">Deadline: {errand.deadline}</Typography>
                <Typography variant="body2">Instructions: {errand.instructions}</Typography>
                <Button variant="contained" color="primary">
                    Accept
                </Button>
            </CardContent>
        </Card>
    );
}

export default ErrandItem;
