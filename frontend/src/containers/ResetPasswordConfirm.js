import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { token, uid } = useParams();


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
        <div className='container mt-5'>
            <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                    {errors.new_password && <span>{errors.new_password}</span>}

            </div>
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confrim New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                    {errors.re_new_password && <span>{errors.re_new_password}</span>}

            </div>

                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
    );

};


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);