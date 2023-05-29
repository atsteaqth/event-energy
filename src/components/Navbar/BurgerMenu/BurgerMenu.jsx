import React from 'react';
import classes from './BurgerMenu.module.scss'



const BurgerMenu = (props) => {
    return (
        <div className={`${classes.menu_wrapper} ${props.menuOpen ? classes.menu_active : ''}`}>
            <div className={classes.menu_container}>
                <div className={classes.menu_number}><a href="tel:+79105802425">8 (910) 580-24-25</a></div>
                <div className={classes.menu_programs}>Программы</div>
                <div className={classes.menu_list}>
                    <p>Есть контакт!</p>
                    <p>Автобиатлон</p>
                    <p>Level Up!</p>
                    <p>Новые рекорды</p>
                    <p>Команда года</p>
                </div>
                <button className={classes.menu_button}>заказать программу</button>
            </div>
        </div>
    );
};

export default BurgerMenu;
