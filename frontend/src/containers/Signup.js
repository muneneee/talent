import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import validator from 'validator';
import PasswordChecklist from 'react-password-checklist';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';



const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const initialValues = {
        first_name:'', 
        last_name: '',
        email: '',
        password: '',
        re_password: ''

    };
    const [formData, setFormData] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors ] = useState({});
    const [errors] = useState({});
    const theme = createTheme();


    // const { first_name, last_name, email, password, re_password } = formData;

    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        setFormErrors(validate(formData));
        if (formData.password !== formData.re_password) {
            errors.re_password = 'Passwords do not match';
        }else {
            setIsSubmit(true);
            signup(formData.first_name, formData.last_name, formData.email, formData.password, formData.re_password);
            setAccountCreated(true);
        }
        
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formData)
        }
    }, [formErrors]);

    const validate = (formData) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!formData.first_name) {
            errors.first_name = 'First name is required!';
        }
        if (!formData.last_name) {
            errors.last_name = 'Last name is required!';
        }
        if (!formData.email) {
            errors.email = 'Email is required!';
        }else if (!regex.test(formData.email)) {
            errors.email = 'This is not a valid email format';
        }
        if (!formData.password) {
            errors.password = 'Password is required!';
        }
        if (!formData.re_password) {
            errors.re_password = 'Confirm password is required!';
        }
        if (formData.password !== formData.re_password) {
            errors.re_password = 'Passwords do not match';
        }
        return errors;

    };


    if (isAuthenticated) {
        return <Navigate replace to='/' />
    }
    if (isSubmit) {
        return <Navigate replace to='/login' />
    }

    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Talent Assessment
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
    }

    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="first_name"
                                name="first_name"
                                autoComplete="first-name"
                                placeholder="First Name" 
                                label="First Name" 
                                variant="outlined" 
                                type='text'
                                value={formData.first_name}
                                onChange={handleChange}                                
                                autoFocus
                            />
                            {formErrors.first_name && <span>{formErrors.first_name}</span>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="last_name"
                                name="last_name"
                                autoComplete="last-name"
                                placeholder="Last Name" 
                                label="Last Name" 
                                variant="outlined" 
                                type='text'
                                value={formData.last_name}
                                onChange={handleChange}                                
                                autoFocus
                            />
                            {formErrors.last_name && <span>{formErrors.last_name}</span>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                autoComplete="email"
                                placeholder="Enter your email" 
                                label="Email" 
                                variant="outlined" 
                                type='email'
                                value={formData.email}
                                onChange={handleChange}                                
                                autoFocus
                            />
                            {formErrors.email && <span>{formErrors.email}</span>}

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                placeholder="Password" 
                                variant="outlined" 
                                value={formData.password}
                                onChange={handleChange}                                
                                minLength='6'

                            />
                            {formErrors.password && <span>{formErrors.password}</span>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="re_password"
                                label="Confirm Password"
                                type="password"
                                id="re_password"
                                autoComplete="confirm-password"
                                placeholder="Confirm Password" 
                                variant="outlined" 
                                value={formData.re_password}
                                onChange={handleChange}                                
                                minLength='6'
                            />
                            {formErrors.re_password && <span>{formErrors.re_password}</span>}

                        </Grid>
                        <PasswordChecklist
                            rules={["minLength","specialChar","number","capital","match"]}
                            minLength={5}
                            value={formData.password}
                            valueAgain={formData.re_password}
                            onChange={(isValid) => {}}
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <p>
                                Already have an account? <Link to='/login' variant="body2">Sign In</Link>
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);

