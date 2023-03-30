import React, { useEffect } from "react";
import HideAppBar from '../components/Navbar';
import TemporaryDrawer from "../components/drawer";
import { connect } from 'react-redux';
import { chekAuthenticated, load_user } from '../actions/auth';

const Layout = (props) => {
    useEffect(() => {
        props.chekAuthenticated();
        props.load_user();

    }, []);

    return (
        <div>
            <HideAppBar />
            <TemporaryDrawer />
            {props.children}
        </div>
    );

};

export default connect(null, { chekAuthenticated, load_user})(Layout);