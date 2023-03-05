import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        // login(email, password)
    };

    return(
        <div className="container mt-5">
            <h1>Sign In</h1>
            <p>Sign into your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type='email'
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />

                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type='password'
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6"
                        required
                    />

                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <p className="mt-3">
                Don't have an account? <link to='/signup'>Sign Up</link>
            </p>
            < p className="mt-3">
                Forgot your password? <Link to='/rest-password'>Reset Password</Link>
            </p>
        </div>
    )
};

//const mapStateToProps = state => ({
    // is Authenticated
//})

export default connect(null, { })(Login);