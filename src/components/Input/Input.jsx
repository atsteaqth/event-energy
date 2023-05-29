import React from 'react';
import classes from './Input.module.scss'

const Input = () => {
    return (
        <div>
            <input className={`${classes.form} ${classes.form_name}`} type="text" placeholder="Имя"/>
            <input className={`${classes.form} ${classes.form_tel}`} type="text" placeholder="Телефон"/>
            <input className={`${classes.form} ${classes.form_mail}`} type="text" placeholder="E-mail"/>
        </div>
    );
};

export default Input;