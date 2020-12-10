import React from 'react';
import Headermain from '../Headermain/Headermain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div style={{height:"700px"}} className="headerBackground container-fluid">
            {/* <Navbar/> */}
            <Headermain/>
        </div>
    );
};

export default Header;