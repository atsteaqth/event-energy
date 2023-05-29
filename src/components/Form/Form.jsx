import React from 'react';
import classes from './Form.module.scss'
import closeForm from '../../assets/icons/close-form.svg'
import Input from "../Input/Input";

const Form = (props) => {
    return (
        <form action="">
        <div className={classes.form_wrapper}>
            <div className={classes.form_container}>
                <div className={classes.close_form}><img onClick={props.modalClose} src={closeForm} alt="закрыть форму"/></div>
                <div className={classes.application}><h2>Заявка на командную игру</h2></div>
                <div className={classes.form_fill}>Заполните эту форму и мы свяжемся с вами в ближайшее время.</div>
                <div className={classes.form_fill_320}>Мы свяжемся с вами <br/>в ближайшее время.</div>
                <Input/>
                <div className={classes.form_field}>Все поля обязательны для заполнения.</div>
                <div className={classes.form_conditions}>
                    <div  className={classes.form_button}><button onClick={props.submit}>Отправить заявку</button></div>
                    <div className={classes.condition}>Отправляя заявку, вы принимаете <a href="">условия</a> обработки персональных данных.</div>
                </div>
            </div>
        </div>
        </form>
    );
};

export default Form;