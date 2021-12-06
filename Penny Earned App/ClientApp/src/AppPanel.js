import * as React from 'react';
import { connect } from 'react-redux';
import _ from "lodash";

import Box from '@mui/material/Box';

import Dashboard from './goals/Dashboard';
import Login from './login/Login';

const user = "Hello"

const AppPanel = ({ user }) => (
    <Box sx={{ display: 'flex', height: "100vh" }}>
        {!user || _.isEmpty(user) ? <Login /> : <Dashboard />}
    </Box>
);

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, null)(AppPanel);