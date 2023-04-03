import React, { useState, useEffect }  from 'react';
import { Link, Navigate } from 'react-router-dom';
import { signup } from '../actions/auth';
import { connect } from 'react-redux';


import Header from '../partials/Header';

const SignUp = ({ signup, isAuthenticated }) => {

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
      if (formData.password !== formData.re_password) {
        errors.re_password = 'Passwords do not match';
        setFormErrors(errors);
      } else {
        setFormErrors({});
        signup(formData.first_name, formData.last_name, formData.email, formData.password, formData.re_password)
          .then(() => {
            setAccountCreated(true);
          })
          .catch((error) => {
            console.log(error);
          });
        setIsSubmit(true);
      }
    };



    if (isAuthenticated) {
        return <Navigate replace to='/' />
    }
    if (isSubmit) {
        return <Navigate replace to='/signin' />
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
                <h1 className="h1">Welcome. We exist to make your career search easier.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">First Name <span className="text-red-600">*</span></label>
                      <input id="first_name" name='first_name' type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" value={formData.first_name} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Last Name <span className="text-red-600">*</span></label>
                      <input id="last_name" type="text" name='last_name' className="form-input w-full text-gray-800" placeholder="Enter your name" value={formData.last_name} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" name='email' className="form-input w-full text-gray-800" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600" >*</span></label>
                      <input id="password" type="password" name='password' className="form-input w-full text-gray-800" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
                    </div>
                    {formErrors.password && <span>{formErrors.password}</span>}
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Confrim Password <span className="text-red-600" >*</span></label>
                      <input id="re_password" type="password" name='re_password' className="form-input w-full text-gray-800" placeholder="Enter your password again" value={formData.re_password} onChange={handleChange} required />
                    </div>
                    {formErrors.re_password && <span>{formErrors.re_password}</span>}

                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                                </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
                <div className="text-gray-600 text-center mt-6">
                  Already have an account? <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>


    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(SignUp);

