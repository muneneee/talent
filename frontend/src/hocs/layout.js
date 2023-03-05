import React from "react";
import Navbar from '../components/navbar';

const Layout = (children) => (
    <div>
        <Navbar />
        {children}
    </div>
);

export default Layout;