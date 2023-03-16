import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name:'', 
        last_name: '',
        email: '',
        password: '',
        re_password: ''

    });

    const [errors, setErrors] = useState({});


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

    return (
        <div className='container mt-5'>
            <h1>Sign up</h1>
            <p>Create your Account</p>

            <form onSubmit={e => onSubmit(e)}>

                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>

                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                    {errors.password && <span>{errors.password}</span>}

                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                    {errors.re_password && <span>{errors.re_password}</span>}

                </div>

                <button className='btn btn-primary' type='submit'> Register </button>

            </form>
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Login</Link>
            </p>

        </div>
    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);