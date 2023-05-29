import React from 'react';
import classes from "./Callback.module.scss";
import phone from "../../../assets/images/phone.svg";

const Callback = () => {
    return (
        <div className={classes.number_call}>
            <img src={phone} alt="позвоните мне"/><span>8 (910) 580-24-25</span>
        </div>
    );
};

export default Callback;