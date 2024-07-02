// src/pages/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
//import { fetchErrands } from '../redux/actions/errandActions';

const Dashboard = () => {
    const errands = useSelector(state => state.errands);

    return (
        <div>
            <h1>Dashboard</h1>
            { }
        </div>
    );
}

export default Dashboard;
