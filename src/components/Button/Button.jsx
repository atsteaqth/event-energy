import React from 'react';
import classes from "./Button.module.scss"

const Button = (props) => {
    return (
            <button onClick={props.action} className={classes.callback_phone}>
                <span>связаться с нами</span>
            </button>
    );
};

export default Button;