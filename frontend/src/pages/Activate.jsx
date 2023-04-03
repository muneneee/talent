import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { verify } from '../actions/auth';
import Header from '../partials/Header';

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate();
    const { token, uid } = useParams();


    const verify_account = e => {
        
        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        navigate('/')
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
                  <h1 className="h1 mb-4">Verify your account</h1>
                  <p className="text-xl text-gray-600">One last step to get started</p>
                </div>
  
                {/* Form */}
                <div className="max-w-sm mx-auto">
                  <form onSubmit={e => onSubmit(e)}>
                    <Link to="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={verify_account}>Verify your account</Link>
                  </form>
                </div>
  
              </div>
            </div>
          </section>
  
        </main>
  
  
      </div>
    );
};

export default connect(null, { verify })(Activate);