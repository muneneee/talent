import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { chekAuthenticated, load_user } from '../actions/auth';

const Layout = (props) => {
    useEffect(() => {
        props.chekAuthenticated();
        props.load_user();

    }, []);

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );

};

export default connect(null, { chekAuthenticated, load_user})(Layout);