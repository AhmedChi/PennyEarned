import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import { login } from './thunks';

const Login = ({ isLoggingIn, attemptLogin, loginMessage }) => {
    useEffect(() => {
        // Watch
    }, []);

    const [values, setValues] = React.useState({
        userName: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const imageItem = {
        img: "/piggy-bank.png",
        title: "Penney Earned Logo"
    };

    const content = (
        <Grid container spacing={0} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6}>
                <Grid container>
                    <img
                        src={`${imageItem.img}`}
                        alt={imageItem.title}
                        style={{ maxWidth: '80%', height: 'auto', margin: "0 auto" }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid container justifyContent="center" alignItems="center">

                    <Grid item xs={10}>
                        <Box component="form" sx={{ display: "row" }}>
                            <div>
                                {loginMessage.length > 0 ? <Alert severity="error">{loginMessage}</Alert> : <></>}
                                <TextField fullWidth margin="normal"
                                    id="username"
                                    label="Username"
                                    defaultValue=""
                                    onChange={handleChange('userName')}
                                />
                                <FormControl fullWidth margin="normal" variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>

                            <LoadingButton
                                variant="contained"
                                loading={isLoggingIn}
                                //loadingPosition="end"
                                onClick={() => attemptLogin({ userName: values.userName, password: values.password })}
                                sx={{ margin: "5px 5px 15px 15px" }}>Login</LoadingButton>
                        </Box>
                    </Grid>

                    <Grid item xs={10} sx={{ marginTop: "35px" }}>
                        <Box component="div" sx={{ margin: "0 auto" }}>
                            <Typography
                                variant="body1" component="p" sx={{ marginBottom: "20px" }}>
                                Welcome to the Penny Earned tool, designed to help you
                                visualize and manage the important goals in life.
                            </Typography>
                            <Typography
                                variant="body1" component="p">
                                Please login using your email and password to proceed.
                            </Typography>
                        </Box>
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    );

    return content;
};

const mapStateToProps = state => ({
    user: state.user,
    isLoggingIn: state.isLoggingIn,
    loginMessage: state.loginMessage
});

const mapDispatchToProps = dispatch => ({
    attemptLogin: loginDetails => dispatch(login(loginDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);