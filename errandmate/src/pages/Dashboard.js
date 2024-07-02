import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchErrands } from '../redux/actions/errandActions';
import ErrandItem from '../components/ErrandItem';
import { Container, Grid, CircularProgress, Typography } from '@material-ui/core';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { loading, errands, error } = useSelector(state => state.errands);

    useEffect(() => {
        dispatch(fetchErrands());
    }, [dispatch]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            {loading && <CircularProgress />}
            {error && <Typography color="error">{error}</Typography>}
            <Grid container spacing={3}>
                {errands.map(errand => (
                    <Grid item xs={12} sm={6} md={4} key={errand.id}>
                        <ErrandItem errand={errand} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Dashboard;
