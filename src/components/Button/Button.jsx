import React from 'react';
import classes from "./Button.module.scss"

const Button = () => {
    return (
        <div>
            <button className={classes.callback_phone}>связаться с нами</button>
        </div>
    );
};

export default Button;