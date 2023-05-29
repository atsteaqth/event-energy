import React from 'react';
import classes from './Confirm.module.scss'
import confirmCloseForm from '../../assets/icons/close-form.svg'

const Confirm = () => {
    return (
        <div className={classes.confirm_wrapper}>
            <div className={classes.confirm_container}>
                <div className={classes.confirm_close_form}><img src={confirmCloseForm} alt="закрыть форму"/></div>
                <div className={classes.confirm_title}><h2>Заявка отправлена</h2></div>
                <div className={classes.confirm_callback}>Мы свяжемся с вами в ближайшее время.</div>
                <button>Вернуться на сайт</button>
            </div>
        </div>
    );
};

export default Confirm;