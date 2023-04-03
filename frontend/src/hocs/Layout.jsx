import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { chekAuthenticated, load_user } from '../actions/auth';
import Header from "../partials/Header";
import Home from "../pages/Home";
import SpeedDialTooltipOpen from "../partials/speeddial";

const Layout = (props) => {
    useEffect(() => {
        props.chekAuthenticated();
        props.load_user();

    }, []);

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow">
    
            {/*  Page sections */}
            <SpeedDialTooltipOpen />
            <Home />
            {/* <FeaturesHome />
            <FeaturesBlocks />
            <Testimonials />
            <Newsletter /> */}
    
            </main>
            
    
            {/*  Site footer */}
            {/* <Footer /> */}
    
        </div>
    );

};

export default connect(null, { chekAuthenticated, load_user})(Layout);