import React from 'react';
import classes from './Logo.module.scss'
import logo from '../../../assets/images/logo.png'

const Logo = () => {
    return (
        <div className={classes.logo_style}>
            <img src={logo} alt="логотип"/>
        </div>
    );
};

export default Logo;