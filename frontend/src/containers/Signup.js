import React, { useState } from 'react';
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
    const [formData, setFormData] = useState({
        first_name:'', 
        last_name: '',
        email: '',
        password: '',
        re_password: ''

    });

    const [passwordAgain, setPasswordAgain] = useState("")


    const [errors, setErrors ] = useState('');

    const theme = createTheme();


    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();

        const errors = {};
        if (!password) {
            errors.password = 'Password is required';
        }
        if (!re_password) {
            errors.re_new_password = 'Please confirm your password';
        }
        if (password !== re_password) {
            errors.re_password = 'Passwords do not match';
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        else{
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        }
        
    };

  


    if (isAuthenticated) {
        return <Navigate replace to='/' />
    }
    if (accountCreated) {
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
                <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 3 }}>
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
                                value={first_name}
                                onChange={e => onChange(e)}                                
                                autoFocus
                            />
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
                                value={last_name}
                                onChange={e => onChange(e)}                                
                                autoFocus
                            />
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
                                value={email}
                                onChange={e => onChange(e)}                                
                                autoFocus
                            />
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
                                value={password}
                                onChange={e => onChange(e)}
                                minLength='6'

                            />
                            {errors.password && <span>{errors.password}</span>}

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
                                value={re_password}
                                onChange={e => onChange(e)}
                                minLength='6'
                            />
                            {errors.re_password && <span>{errors.re_password}</span>}
                        </Grid>
                        <PasswordChecklist
                            rules={["minLength","specialChar","number","capital","match"]}
                            minLength={5}
                            value={password}
                            valueAgain={re_password}
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

