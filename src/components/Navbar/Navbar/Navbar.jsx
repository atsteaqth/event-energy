import React from 'react';
import logo from '../../../assets/images/logo.png'
import phone from '../../../assets/images/phone.svg'
import classes from './Navbar.module.scss'
import Button from "../../Button/Button";

const Navbar = () => {
    return (
        <div className="container">
        <div className={classes.navbar_wrapper}>
            <div className={classes.logo_style}><img src={logo} alt="логотип"/></div>
            <div><img src={phone} alt="позвоните мне"/></div>
            <div className={classes.number_call}>8(910)580-24-25</div>
            <Button/>
        </div>
        </div>
    );
};

export default Navbar;