import React from "react";
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div className="mt-4 p-5 bg-secondary text-white rounded">
            <h1 className='display-4'>Welcome to Talent Assessment</h1>
            <p className='lead'>This is an awesome talent assessment system to help you make the right choice</p>
            <hr className='my-4'/>
            <p>Click the log in button</p>
            <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
        </div>
    </div>
);

export default Home;