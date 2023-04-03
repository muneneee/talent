import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';
import Header from '../partials/Header';



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
        navigate('/signin')
    }

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow">

                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                        {/* Page header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4">Reset passoword</h1>
                        <p className="text-xl text-gray-600">Enter your new password and confirm it.</p>
                        </div>

                        {/* Form */}
                        <div className="max-w-sm mx-auto">
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">New password <span className="text-red-600">*</span></label>
                                <input id="new_password" name="new_password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your new password"  value={new_password}  onChange={e => onChange(e)} required />
                                {errors.new_password && <span>{errors.new_password}</span>}
                            </div>
                            <div className="w-full px-3">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Confirm password <span className="text-red-600">*</span></label>
                                <input id="re_new_password" name="re_new_password" type="password" className="form-input w-full text-gray-800" placeholder="Confrim your password"  value={re_new_password}  onChange={e => onChange(e)} required />
                                {errors.re_new_password && <span>{errors.re_new_password}</span>}
                            </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="w-full px-3">
                                <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Reset Password</button>
                            </div>
                            </div>
                        </form>
                        </div>

                    </div>
                    </div>
                </section>

            </main>


        </div>
    )

};


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);