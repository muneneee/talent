import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

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



const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { token, uid } = useParams();
    const theme = createTheme();



    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });



    const onSubmit = e => {
        e.preventDefault();

    
        const errors = {};
        if (!new_password) {
            errors.new_password = 'New password is required';
        }
        if (!re_new_password) {
            errors.re_new_password = 'Please confirm your new password';
        }
        if (new_password !== re_new_password) {
            errors.re_new_password = 'Passwords do not match';
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }



        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);

    };

    useEffect(() => {

    }, []);


    if (requestSent) {
        navigate('/login')
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
                <Typography component="h1" variant="h5">
                    Reset your Password
                </Typography>
                <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="new_password"
                                label="New Password"
                                type="password"
                                id="new_password"
                                autoComplete="current-password"
                                placeholder="New Password" 
                                variant="outlined" 
                                value={new_password}
                                onChange={e => onChange(e)}
                                minLength='6'
                            />
                            {errors.new_password && <span>{errors.new_password}</span>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="re_new_password"
                                label="Confirm Password"
                                type="password"
                                id="re_new_password"
                                autoComplete="confirm-password"
                                placeholder="Confirm New Password" 
                                variant="outlined" 
                                value={re_new_password}
                                onChange={e => onChange(e)}
                                minLength='6'
                            />
                            {errors.re_new_password && <span>{errors.re_new_password}</span>}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Reset Password
                    </Button>
                </Box>
            </Box>
          </Container>
        </ThemeProvider>
    );

};


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);